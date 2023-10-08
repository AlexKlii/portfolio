import { Contact } from '@/typings/Contact';

export const fetchContact = async (): Promise<Contact> => {
    const res = await fetch(`${process.env.BASE_URL}/api/contactme`);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}