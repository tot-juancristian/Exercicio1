import { useState } from "react";
import { BaseNavBarProps } from "../types/NavigationTypes";
import { Grid } from "@mui/material";

const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    backgroundColor:'white',
    padding: '20px',
    transition: 'transform 0.3s ease-in-out',
    zIndex: 999
};

const menuBtnStyle: React.CSSProperties = {
    position: 'fixed',
    top: '15px',
    left: '15px',
    zIndex: 1001,
    fontSize:'30px',
    cursor: 'pointer',
    background: 'none',
    border: 'none'
}

const SideNavBar: React.FC<BaseNavBarProps> = ({ logoText, navItems, userProfile }) => {
    const [isOpen, setIsOpen] = useState(true);

    const transformStyle: React.CSSProperties = isOpen ? 
    { transform: 'translateX(0)' } : 
    { transform: 'translateX(-100%)' };

    const toggleSidebar = () => {
        setIsOpen(prev => !prev);
    }
    return(
        <>
        <button onClick={toggleSidebar}
            style={menuBtnStyle}>
                {isOpen ? '✖' : '☰'}
            </button>

            <nav style = {{ ...navStyle, ...transformStyle}}>
                <Grid 
                container 
                justifyContent={"center"} 
                alignContent={"center"}
                style={{ 
                    fontWeight: 'bold', 
                    fontSize: '1.5em', 
                    marginBottom: '20px' 
                    }}>
                    {logoText}
                </Grid>

                <ul style = {{ listStyle: 'none', padding: 0}}>
                    {navItems.map((item) =>
                        <li key={item.label} style={{ marginBottom: '10px' }}>
                            <a href={item.href} style={{ textDecoration: 'none', color: 'black' }}>
                                {item.label}
                            </a>
                        </li>
                    )}
                </ul>
                <hr/>
                <Grid 
                container 
                justifyContent={"center"} 
                alignContent={"center"}
                style={{ 
                    marginTop: '20px' 
                    }}>
                    <p> Perfil de <strong>{userProfile.name}</strong> </p>
                    <button style={{display: 'block', marginBottom:'5px'}}>
                        Editar
                    </button>
                    <button style={{display:'block', marginBottom:'5px'}}>
                        Pesquisar
                    </button>
                    <button style={{display:'block', marginBottom:'5px'}}>
                        Configurações
                    </button>
                    <button style = {{display:'block', marginBottom:'5px'}}>
                        Sair
                    </button>
                </Grid>
            </nav>
        </>
    )
}

export default SideNavBar;