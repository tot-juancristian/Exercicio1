class ThemeSettings {
  
  // Inserir cores que serão utilizadas no curso (todas)
  static readonly THEME_COLORS = {
    primary: '#00f300ff',
    primaryHover: '#07092A',

    secondary: '#237a23ff',
    secondaryHover: '#0A318A',

    textPrimary: '#161516',    
    textSecondary: '#FFF',            

    background: '#F5F5F5',
    videoBackground: '#010101',
    
    black: '#303030',
    white: '#FFFFFF',
  };
  
  static readonly THEME_FONTS = {
    primary: 'Montserrat',
    secondary: 'Montserrat',
  };

  // Sempre alterar aqui o tamanho das fontes que serão utilizadas e seguir
  // o cálculo para deixar os tamanhos proporcionais para diferentes tamanhos
  // de tela
  static readonly THEME_FONT_SIZES = {
    title01: '3.6rem',
    title01_small: '2.5rem', // XXrem * 1300 / 1920
    title01_mobile: '2.5rem', // XXrem * 600 / 1920

    title02: '2.25rem',
    title02_small: '1.6rem', // XXrem * 1300 / 1920
    title02_mobile: '1.6rem', // XXrem * 600 / 1920

    title03: '1.7rem',
    title03_small: '1.2rem', // XXrem * 1300 / 1920
    title03_mobile: '1.2rem',  // XXrem * 600 / 1920

    title04: '1.4rem',
    title04_small: '1.4rem', // XXrem * 1300 / 1920
    title04_mobile: '1.4rem', // XXrem * 600 / 1920

    body01: '1.4rem',
    body01_small: '1rem',  // XXrem * 1300 / 1920
    body01_mobile: '1rem', // XXrem * 600 / 1920

    body02: '0.8rem',
    body02_small: '0.8rem',  // XXrem * 1300 / 1920
    body02_mobile: '0.8rem', // XXrem * 600 / 1920
  };

  static readonly THEME_FONT_WEIGHTS = {
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 800,
  };

  static readonly THEME_SPACING = {
    mini: 1,
    extraSmall: 2,
    verySmall: 4,
    small: 6,
    medium: 8, 
    semiLarge: 12, 
    large: 16, 
  };

  static readonly THEME_EFFECTS = {
    effect3d: '-10px 10px 15px 0px rgba(0, 0, 0, 0.25), 0px 5px 3px 0px rgba(255, 255, 255, 0.25) inset',
    innerWithe: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  };
}

export default ThemeSettings;
