import { Grid } from "@mui/material";
import SideNavBar from "../../components/SideNavBar";
import SocialPost from "../../components/SocialPost";
import TopNavBar from "../../components/TopNavBar";
import { NavItem, UserProfile } from "../../types/NavigationTypes";

const navItems: NavItem[] = [
    {label: 'Contato', href: '#contact'},
    {label: 'Saiba mais', href: '#about'},
    {label: 'Blog', href: '#blog'}
];

    const userProfile: UserProfile = { 
        name: 'Juan de Borba'
    };

    function Page(){
        return(
            <Grid container style={{ minHeight: '200vh', paddingTop: '60px'}}>
                <TopNavBar 
                logoText=""
                navItems={navItems} 
                userProfile={userProfile}
                />
                <SideNavBar logoText="Menu"
                navItems={navItems}
                userProfile={userProfile}
                />
                <main style={{marginLeft: '100px', padding: '20px'}}>
                    <SocialPost description="Estou aprendendo React e TypeScript."
                    commentsCount={10}
                    likesCount={20}
                    />
                    <SocialPost description="Estou praticando componentização e etc..."
                    commentsCount={3}
                    likesCount={10}
                    />
                    <p style={{marginTop: '50px'}}></p>
                    <Grid style={{height: '100px'}}></Grid>
                </main>
            </Grid>
        )
    }

    export default Page;