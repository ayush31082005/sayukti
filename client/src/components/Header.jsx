import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Container,
    Typography,
    Menu,
    MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';

// Top Bar Styling
const TopBar = styled(Box)({
    backgroundColor: '#2F7A32',
    color: '#FFFFFF',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
});

// Main Header Styling
const StyledAppBar = styled(AppBar)({
    backgroundColor: '#FFFFFF',
    boxShadow: 'none',
    borderBottom: '1px solid #E6E6E6',
    height: '80px',
    justifyContent: 'center',
});

const LogoContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    lineHeight: 1.2,
    cursor: 'pointer',
});

// FIXED: Logo image ke liye alag component
const LogoImage = styled('img')({
    height: '40px',
    width: 'auto',
    objectFit: 'contain',
});

const LogoMain = styled('span')({
    fontFamily: '"Poppins", "Roboto", sans-serif',
    fontWeight: 600,
    fontSize: '1.25rem',
    color: '#2F7A32',
});

const LogoTagline = styled('span')({
    fontFamily: '"Poppins", "Roboto", sans-serif',
    fontSize: '0.7rem',
    fontWeight: 400,
    color: '#4B5563',
});

// NavButton with hover effect
const NavButton = styled(Button)({
    fontFamily: '"Poppins", "Roboto", sans-serif',
    fontSize: '11px',
    fontWeight: 500,
    color: '#2F7A32',
    textTransform: 'none',
    padding: '4px 6px',
    minWidth: 'auto',
    whiteSpace: 'nowrap',
    '&:hover': {
        color: '#F7931E',
        backgroundColor: 'transparent',
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    transition: 'all 0.2s ease-in-out',
});

// Register Button with hover effect
const RegisterButton = styled(Button)({
    fontFamily: '"Poppins", "Roboto", sans-serif',
    fontSize: '11px',
    fontWeight: 600,
    backgroundColor: '#F7931E',
    color: '#FFFFFF',
    padding: '4px 10px',
    borderRadius: '4px',
    textTransform: 'none',
    marginLeft: '4px',
    '&:hover': {
        backgroundColor: '#e07d0b',
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 12px rgba(247, 147, 30, 0.3)',
    },
    transition: 'all 0.2s ease-in-out',
});

// Login Button with hover effect
const LoginButton = styled(Button)({
    fontFamily: '"Poppins", "Roboto", sans-serif',
    fontSize: '11px',
    fontWeight: 600,
    backgroundColor: 'transparent',
    border: '1px solid #2F7A32',
    color: '#2F7A32',
    padding: '4px 10px',
    borderRadius: '4px',
    textTransform: 'none',
    marginLeft: '4px',
    '&:hover': {
        backgroundColor: 'rgba(47, 122, 50, 0.04)',
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 12px rgba(47, 122, 50, 0.2)',
    },
    transition: 'all 0.2s ease-in-out',
});

// TopBar Button with hover effect
const TopBarButton = styled(Button)({
    fontFamily: '"Poppins", "Roboto", sans-serif',
    fontSize: '11px',
    fontWeight: 600,
    color: '#FFFFFF',
    textTransform: 'none',
    padding: '2px 4px',
    minWidth: 'auto',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        transform: 'translateY(-1px)',
    },
    transition: 'all 0.2s ease-in-out',
});

const AndSymbol = styled(Typography)({
    color: '#FFFFFF',
    fontSize: '12px',
    fontWeight: 600,
    margin: '0 2px',
    opacity: 0.9,
});

// Social Icon Button with hover effect
const SocialIconButton = styled(IconButton)({
    color: '#FFFFFF',
    padding: '2px',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        transform: 'scale(1.1)',
    },
    transition: 'all 0.2s ease-in-out',
});

// Menu Item with hover effect
const StyledMenuItem = styled(MenuItem)({
    fontSize: '12px',
    color: '#2F7A32',
    '&:hover': {
        backgroundColor: 'rgba(247, 147, 30, 0.08)',
        color: '#F7931E',
    },
    transition: 'all 0.2s ease-in-out',
});

// Drawer ListItemButton with hover effect
const StyledListItemButton = styled(ListItemButton)({
    '&:hover': {
        backgroundColor: 'rgba(247, 147, 30, 0.08)',
        '& .MuiListItemText-primary': {
            color: '#F7931E',
        },
    },
    transition: 'all 0.2s ease-in-out',
});

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(100);
    const [logoError, setLogoError] = useState(false);

    // Dropdown states
    const [companyAnchorEl, setCompanyAnchorEl] = useState(null);
    const [franchiseAnchorEl, setFranchiseAnchorEl] = useState(null);

    const companyOpen = Boolean(companyAnchorEl);
    const franchiseOpen = Boolean(franchiseAnchorEl);

    useEffect(() => {
        const checkZoom = () => {
            const zoom = Math.round(window.devicePixelRatio * 100);
            setZoomLevel(zoom);
        };

        checkZoom();
        window.addEventListener('resize', checkZoom);

        return () => {
            window.removeEventListener('resize', checkZoom);
        };
    }, []);

    // 175% ज़ूम पर हैम्बर्गर मेनू दिखेगा
    const showHamburger = zoomLevel >= 150;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Dropdown handlers
    const handleCompanyClick = (event) => {
        setCompanyAnchorEl(event.currentTarget);
        setFranchiseAnchorEl(null);
    };

    const handleFranchiseClick = (event) => {
        setFranchiseAnchorEl(event.currentTarget);
        setCompanyAnchorEl(null);
    };

    const handleClose = () => {
        setCompanyAnchorEl(null);
        setFranchiseAnchorEl(null);
    };

    // Navigation handlers
    const handleNavigation = (path) => {
        window.location.href = path;
    };

    const handleLogoError = () => {
        setLogoError(true);
    };

    // Social Media Links
    const socialLinks = {
        facebook: 'https://facebook.com/ishavia',
        instagram: 'https://instagram.com/ishavia',
        youtube: 'https://youtube.com/ishavia',
    };

    // Menu Items with paths
    const menuItems = [
        { name: 'HOME', path: '/' },
        { name: 'COMPANY', path: '/company' },
        { name: 'GRIEVANCE', path: '/grievance' },
        { name: 'PRODUCTS', path: '/products' },
        { name: 'OPPORTUNITIES', path: '/opportunities' },
        { name: 'FRANCHISE', path: '/franchise' },
        { name: 'CONTACT US', path: '/contact' },
    ];

    // Company dropdown items with paths
    const companyItems = [
        { name: 'About Us', path: '/company/about' },
        { name: 'Legal', path: '/company/legal' },
    ];

    // Franchise dropdown items with paths
    const franchiseItems = [
        { name: 'Login', path: '/franchise/login' },
        { name: 'Franchise List', path: '/franchise/list' },
    ];

    const drawer = (
        <Box sx={{ width: 250, pt: 2 }}>
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <StyledListItemButton onClick={() => handleNavigation(item.path)}>
                            <ListItemText primary={item.name} />
                        </StyledListItemButton>
                    </ListItem>
                ))}

                {/* Company Submenu */}
                <Box sx={{ pl: 2 }}>
                    {companyItems.map((item) => (
                        <ListItem key={item.name} disablePadding>
                            <StyledListItemButton onClick={() => handleNavigation(item.path)}>
                                <ListItemText primary={item.name} sx={{ '& .MuiTypography-root': { fontSize: '12px' } }} />
                            </StyledListItemButton>
                        </ListItem>
                    ))}
                </Box>

                {/* Franchise Submenu */}
                <Box sx={{ pl: 2 }}>
                    {franchiseItems.map((item) => (
                        <ListItem key={item.name} disablePadding>
                            <StyledListItemButton onClick={() => handleNavigation(item.path)}>
                                <ListItemText primary={item.name} sx={{ '& .MuiTypography-root': { fontSize: '12px' } }} />
                            </StyledListItemButton>
                        </ListItem>
                    ))}
                </Box>

                {/* Register/Login in Drawer */}
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => handleNavigation('/register')}
                        sx={{
                            backgroundColor: '#F7931E',
                            color: '#FFFFFF',
                            borderRadius: '4px',
                            mx: 2,
                            my: 1,
                            '&:hover': {
                                backgroundColor: '#e07d0b',
                                transform: 'translateY(-1px)',
                                boxShadow: '0 4px 12px rgba(247, 147, 30, 0.3)',
                            },
                            transition: 'all 0.2s ease-in-out',
                        }}
                    >
                        <ListItemText primary="REGISTER" sx={{ textAlign: 'center' }} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => handleNavigation('/login')}
                        sx={{
                            backgroundColor: 'transparent',
                            border: '1px solid #2F7A32',
                            color: '#2F7A32',
                            borderRadius: '4px',
                            mx: 2,
                            my: 1,
                            '&:hover': {
                                backgroundColor: 'rgba(47, 122, 50, 0.04)',
                                transform: 'translateY(-1px)',
                                boxShadow: '0 4px 12px rgba(47, 122, 50, 0.2)',
                            },
                            transition: 'all 0.2s ease-in-out',
                        }}
                    >
                        <ListItemText primary="LOGIN" sx={{ textAlign: 'center' }} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            {/* Top Bar */}
            <TopBar>
                <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: { xs: 1, md: 2 } }}>
                    {/* Left Side */}
                    <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'rgba(255,255,255,0.1)', borderRadius: '30px', p: '2px' }}>
                        <TopBarButton
                            startIcon={<PersonAddIcon sx={{ fontSize: 12 }} />}
                            onClick={() => handleNavigation('/register')}
                        >
                            Join
                        </TopBarButton>
                        <AndSymbol>&</AndSymbol>
                        <TopBarButton
                            startIcon={<LoginIcon sx={{ fontSize: 12 }} />}
                            onClick={() => handleNavigation('/login')}
                        >
                            Login
                        </TopBarButton>
                    </Box>

                    {/* Right Side */}
                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                        <SocialIconButton component="a" href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                            <FacebookIcon sx={{ fontSize: 14 }} />
                        </SocialIconButton>
                        <SocialIconButton component="a" href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                            <InstagramIcon sx={{ fontSize: 14 }} />
                        </SocialIconButton>
                        <SocialIconButton component="a" href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                            <YouTubeIcon sx={{ fontSize: 14 }} />
                        </SocialIconButton>
                    </Box>
                </Container>
            </TopBar>

            {/* Main Header */}
            <StyledAppBar position="sticky">
                <Toolbar
                    sx={{
                        height: '100%',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        px: { xs: 2, md: 4 }
                    }}
                >
                    {/* LEFT LOGO - FIXED */}
                    <Box sx={{ flex: 1, display: 'flex' }}>
                        <LogoContainer onClick={() => handleNavigation('/')}>
                            {!logoError ? (
                                <LogoImage
                                    src="/logo.png"
                                    alt="Ishaavia Logo"
                                    onError={handleLogoError}
                                    sx={{ height: '75px', width: 'auto', mb: 0.5 }}
                                />
                            ) : (
                                <>
                                    <LogoMain>Ishaavia</LogoMain>
                                    <LogoTagline>Together We Grow</LogoTagline>
                                </>
                            )}
                        </LogoContainer>
                    </Box>

                    {/* CENTER MENU */}
                    {!showHamburger && (
                        <Box
                            sx={{
                                position: 'absolute',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px'
                            }}
                        >
                            <NavButton onClick={() => handleNavigation('/')}>
                                HOME
                            </NavButton>

                            <NavButton onClick={handleCompanyClick} endIcon={<ArrowDropDownIcon />}>
                                COMPANY
                            </NavButton>

                            <Menu
                                anchorEl={companyAnchorEl}
                                open={companyOpen}
                                onClose={handleClose}
                            >
                                {companyItems.map((item) => (
                                    <StyledMenuItem
                                        key={item.name}
                                        onClick={() => {
                                            handleClose();
                                            handleNavigation(item.path);
                                        }}
                                    >
                                        {item.name}
                                    </StyledMenuItem>
                                ))}
                            </Menu>

                            <NavButton onClick={() => handleNavigation('/grievance')}>
                                GRIEVANCE
                            </NavButton>

                            <NavButton onClick={() => handleNavigation('/products')}>
                                PRODUCTS
                            </NavButton>

                            <NavButton onClick={() => handleNavigation('/opportunities')}>
                                OPPORTUNITIES
                            </NavButton>

                            <NavButton onClick={handleFranchiseClick} endIcon={<ArrowDropDownIcon />}>
                                FRANCHISE
                            </NavButton>

                            <Menu
                                anchorEl={franchiseAnchorEl}
                                open={franchiseOpen}
                                onClose={handleClose}
                            >
                                {franchiseItems.map((item) => (
                                    <StyledMenuItem
                                        key={item.name}
                                        onClick={() => {
                                            handleClose();
                                            handleNavigation(item.path);
                                        }}
                                    >
                                        {item.name}
                                    </StyledMenuItem>
                                ))}
                            </Menu>

                            <NavButton onClick={() => handleNavigation('/contact')}>
                                CONTACT US
                            </NavButton>
                        </Box>
                    )}

                    {/* RIGHT SIDE BUTTONS */}
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center'
                        }}
                    >
                        {!showHamburger && (
                            <>
                                <RegisterButton onClick={() => handleNavigation('/register')}>
                                    REGISTER
                                </RegisterButton>

                                <LoginButton onClick={() => handleNavigation('/login')}>
                                    LOGIN
                                </LoginButton>
                            </>
                        )}

                        {showHamburger && (
                            <IconButton onClick={handleDrawerToggle} sx={{ color: '#2F7A32' }}>
                                <MenuIcon />
                            </IconButton>
                        )}
                    </Box>
                </Toolbar>
            </StyledAppBar>

            {/* Drawer */}
            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                {drawer}
            </Drawer>
        </>
    );
};

export default Header;