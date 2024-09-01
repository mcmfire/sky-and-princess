import { Attendee } from '@/types/rsvp';
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

export const exportToExcel = async (attendees: Attendee[]) => {
    try {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Sheet1');

        if (attendees.length > 0) {
            worksheet.columns = Object.keys(attendees[0]).map(key => ({ header: key, key: key }));
        }

        attendees.forEach(item => worksheet.addRow(item));

        const buffer = await workbook.xlsx.writeBuffer();
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'attendees.xlsx');
    }
    catch (error) {
        console.error('Error exporting to Excel:', error);
        alert('Uh oh! Something went wrong. Please contact the admin.');
    }
};