import React from 'react';
import { BaseNavBarProps } from '../types/NavigationTypes';
import { Grid } from '@mui/material';

const TopNavBar: React.FC<BaseNavBarProps> = ({ logoText, navItems, userProfile }) => {
    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                backgroundColor: '#df0000ff',
                color: 'white',
                padding: '20px 20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000
            }}
        >
            <Grid style={{ fontWeight: 'bold', fontSize: '1.5em' }}>
                {logoText}
            </Grid>
            <Grid 
            justifyContent={"center"}
            alignContent={'center'}
            style={{ display: 'flex', gap: '20px' }}>
                {navItems.map((item) =>
                    <a
                        key={item.label}
                        href={item.href}
                        style={{ color: 'white', textDecoration: 'none' }}
                    >
                        {item.label}
                    </a>
                )}
            </Grid>

            <Grid 
            justifyContent={"center"}
            style={{ 
                display: 'flex', 
                alignContent: 'center', 
                gap: '10px' }}>
                <span> Olá, {userProfile.name}
                </span>
                <select>
                    <option>Opções</option>
                    <option>Editar</option>
                    <option>Pesquisar</option>
                    <option>Configurações</option>
                    <option>Sair</option>
                </select>
            </Grid>
            <Grid>

            </Grid>
        </nav>
    )
}

export default TopNavBar;