import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import { Attendee } from '@/types/rsvp';

export async function GET(req: Request, res: NextResponse) {
    req.headers.set('Access-Control-Allow-Origin', '*');
    req.headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    try {
        const url = new URL(req.url || '', `http://${req.headers.get('host')}`);
        const name = url.searchParams.get('name') || null;

        const attendees: Attendee[] = (await kv.get('attendees')) || [];
        
        if (name) {
            const attendee = attendees.find(attendee => attendee.name.toLowerCase() === name.toLowerCase());

            if (attendee) {
                return Response.json({ 
                    name: attendee.name, 
                    phoneNumber: attendee.phone_number, 
                    isAttending: attendee.isAttending 
                });
            }
            
            return Response.json({ isAttending: null });
        }

        return Response.json(attendees);
    }
    catch (error) {
        return Response.json({ message: 'Uh oh! Something went wrong. Please contact the admin.', error: error });
    }
}

export async function POST(req: Request, res: NextResponse) {
    req.headers.set('Access-Control-Allow-Origin', '*');
    req.headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    try {
        const data = await req.json();

        let { name, phone_number } = data;

        if (!name) {
            return Response.json({ message: 'Please provide your name.' });
        }

        const attendees: Attendee[] = (await kv.get('attendees')) || [];

        const attendee = attendees.find(attendee => attendee.name.toLowerCase() === name.toLowerCase());

        if (!attendee) {
            if (phone_number) {
                phone_number = parseInt(phone_number, 10);
            }
            else {
                phone_number = null;
            }

            attendees.push({ name: name, phone_number: phone_number, isAttending: true });

            await kv.set('attendees', attendees);
        }

        return Response.json({ name: name, phone_number: phone_number, isAttending: true });
    }
    catch (error) {
        return Response.json({ message: 'Uh oh! Something went wrong. Please contact the admin.', error: error });
    }
}
