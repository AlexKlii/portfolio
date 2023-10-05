import { SocialLink } from '@/typings/SocialLink';

export const fetchSocialLinks = async (): Promise<SocialLink[]> => {
    const rest = await fetch(`${process.env.BASE_URL}/api/socialLinks`, {
        next: { revalidate: 10 },
    });
    const socialLinks: SocialLink[] = await rest.json();
    
    return socialLinks;
}