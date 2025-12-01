export interface NavItem{
    label: string;
    href: string;
}

export interface UserProfile{
    name:string;
}

export interface BaseNavBarProps{
    logoText: string;
    navItems: NavItem[];
    userProfile: UserProfile;
}