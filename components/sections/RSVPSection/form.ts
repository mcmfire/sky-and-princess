import { Attendee } from "@/types/rsvp";
import { exportToExcel } from "@/utils/export";

export const handleSubmitRSVP = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const rsvpData: { [key: string]: FormDataEntryValue } = {};

    formData.forEach((value, key) => {
        rsvpData[key] = value;
    });

    const response = await fetch('/api/attendees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(rsvpData),
    });

    if (!response.ok) {
        alert("Uh oh! Something went wrong. Please contact the admin.");
    }
    else {
        const data = await response.json();

        if (data.isAttending) {
            localStorage.setItem("username", data.name);
            alert(`Thank you, ${data.name.toString()}. See you there!`);
            window.location.reload();
        };
    }
}

export const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;

    value = value.toString();

    if (value.length > 11) {
        value = value.slice(0, 11);
    }

    event.target.value = value;
};

export const handleUserAttendingStatus = async (name: string) => {
    try {
        const response = await fetch(`/api/attendees?name=${name}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();

        const isAttending: boolean | null = data.isAttending;

        return { isAttending: isAttending };
    }
    catch (error) {
        console.error("SYSTEM ERROR: ", error);

        return null;
    }
};

export const handleExcelDownload = async () => {
    try {
        const response = await fetch("/api/attendees", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
    
        if (!response.ok) {
            alert("Uh oh! Something went wrong. Please contact the admin.");
            return;
        }
    
        const attendees: Attendee[] = await response.json();
    
        exportToExcel(attendees);
    }
    catch (error) {
        console.error("SYSTEM ERROR: ", error);

        return null;
    }
};