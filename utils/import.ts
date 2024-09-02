import { storage } from "@/lib/firebase";
import { getDownloadURL, ref } from "firebase/storage";

export const downloadFirebaseImage = async (imagePath: string) => {
    const imageRef = ref(storage, imagePath);
    const imageURL = await getDownloadURL(imageRef);

    return imageURL;
};
