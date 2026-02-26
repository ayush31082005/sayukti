import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Link,
    Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Footer Styling
const FooterContainer = styled(Box)({
    backgroundColor: '#0A7A2F',
    color: '#FFFFFF',
    padding: '50px 40px 30px 40px',
    fontFamily: 'Arial, sans-serif',
    width: '100%',
});

const FooterContent = styled(Container)({
    maxWidth: '1300px',
    margin: '0 auto',
    width: '100%',
});

// Logo Container - Image aur Text dono ke liye
const LogoContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '15px',
    cursor: 'pointer',
    '&:hover': {
        '& .logo-text': {
            color: '#F7931E',
        },
    },
});

const LogoImage = styled('img')({
    height: '40px',
    width: 'auto',
    objectFit: 'contain',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
    },
});

const LogoText = styled(Typography)({
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Arial, sans-serif',
    transition: 'color 0.2s ease-in-out',
    className: 'logo-text',
});

const CompanyDescription = styled(Typography)({
    fontSize: '13px',
    lineHeight: 1.6,
    color: '#FFFFFF',
    opacity: 0.9,
    fontFamily: 'Arial, sans-serif',
    maxWidth: '280px',
});

const SectionTitle = styled(Typography)({
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: '20px',
    fontFamily: 'Arial, sans-serif',
    textTransform: 'uppercase',
    borderBottom: '2px solid #F7931E',
    paddingBottom: '8px',
    display: 'inline-block',
});

const FooterLink = styled(Link)({
    display: 'block',
    color: '#FFFFFF',
    fontSize: '13px',
    textDecoration: 'none',
    marginBottom: '8px',
    opacity: 0.9,
    fontFamily: 'Arial, sans-serif',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
        color: '#F7931E',
        transform: 'translateX(5px)',
        textDecoration: 'underline',
    },
});

const ContactText = styled(Typography)({
    fontSize: '13px',
    lineHeight: 1.6,
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: '5px',
    fontFamily: 'Arial, sans-serif',
    whiteSpace: 'nowrap',
});

const ContactLine = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px',
    fontSize: '13px',
    color: '#FFFFFF',
    opacity: 0.9,
    fontFamily: 'Arial, sans-serif',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
        color: '#F7931E',
        transform: 'translateX(3px)',
    },
});

const DividerLine = styled(Divider)({
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    margin: '40px 0 30px 0',
    width: '100%',
});

const CopyrightText = styled(Typography)({
    color: '#FFFFFF',
    fontSize: '13px',
    opacity: 0.8,
    textAlign: 'center',
    width: '100%',
    fontFamily: 'Arial, sans-serif',
    cursor: 'pointer',
    '&:hover': {
        color: '#F7931E',
    },
});

const Footer = () => {
    const [logoError, setLogoError] = useState(false);

    // Quick Links with paths
    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/company/about' },
        { name: 'Our Banker', path: '/banker' },
        { name: 'Our Products', path: '/products' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Seminar List', path: '/seminars' },
        { name: 'Download', path: '/download' },
        { name: 'DS Block List', path: '/ds-block' },
        { name: 'Contact Us', path: '/contact' },
    ];

    // Policy Links with paths
    const policyLinks = [
        { name: 'Exchange Policy', path: '/exchange-policy' },
        { name: 'Marketing And Sale Policy', path: '/marketing-sales-policy' },
        { name: 'Order Policy', path: '/order-policy' },
        { name: 'Payment Policy', path: '/payment-policy' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms and Conditions', path: '/terms-conditions' },
        { name: 'Cancellation Policy', path: '/cancellation-policy' },
        { name: 'Shipment And Delivery Policy', path: '/shipment-delivery-policy' },
        { name: 'Testimonial Policy', path: '/testimonial-policy' },
        { name: 'Grievances', path: '/grievance' },
        { name: 'FAQ', path: '/company/legal' },
    ];

    const handleNavigation = (path) => {
        window.location.href = path;
        console.log(`Navigating to: ${path}`);
    };

    const handleExternalLink = (url) => {
        window.open(url, '_blank');
    };

    const handleLogoError = () => {
        setLogoError(true);
    };

    return (
        <FooterContainer>
            <FooterContent>
                {/* 4 Columns - All in One Row */}
                <Grid
                    container
                    spacing={3}
                    alignItems="flex-start"
                    justifyContent="space-between"
                >
                    {/* Column 1 - Company Info with Logo */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box>
                            {/* Logo Container - Image + Text */}
                            <LogoContainer onClick={() => handleNavigation('/')}>
                                {!logoError ? (
                                    <LogoImage
                                        src="/logo.png"
                                        alt="Ishaavia Logo"
                                        onError={handleLogoError}
                                    />
                                ) : null}
                                {/* <LogoText>Ishaavia</LogoText> */}
                            </LogoContainer>

                            {/* Company Description */}
                            <CompanyDescription>
                                We are a direct Selling company founded by business professionals.
                                At Ishaavia Global Marketing, we create dynamic entrepreneurs
                                through the promotion of high quality wellness products, personal
                                care products, Home care products.
                            </CompanyDescription>
                        </Box>
                    </Grid>

                    {/* Column 2 - Quick Links */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box>
                            <SectionTitle>Quick Links</SectionTitle>
                            {quickLinks.map((link, index) => (
                                <FooterLink
                                    key={index}
                                    onClick={() => handleNavigation(link.path)}
                                >
                                    {link.name}
                                </FooterLink>
                            ))}
                        </Box>
                    </Grid>

                    {/* Column 3 - Our Policies */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box>
                            <SectionTitle>Our Policies</SectionTitle>
                            {policyLinks.map((link, index) => (
                                <FooterLink
                                    key={index}
                                    onClick={() => handleNavigation(link.path)}
                                >
                                    {link.name}
                                </FooterLink>
                            ))}
                        </Box>
                    </Grid>

                    {/* Column 4 - Contact Us */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box>
                            <SectionTitle>Contact Us</SectionTitle>
                            <ContactText
                                onClick={() => handleNavigation('/location')}
                                sx={{ cursor: 'pointer', '&:hover': { color: '#F7931E' } }}
                            >
                                Near Tirupati Appartment,
                                <br />
                                Chhatrapati Nagar, Tukum,
                                <br />
                                Chandrapur, Maharashtra 442401,
                                <br />
                                India
                            </ContactText>

                            <ContactLine onClick={() => handleExternalLink('tel:+918767826599')}>
                                <span>📞</span> +91 87678 26599
                            </ContactLine>
                            <ContactLine onClick={() => handleExternalLink('mailto:info@ishaaivia.com')}>
                                <span>✉️</span> info@ishaaivia.com
                            </ContactLine>
                        </Box>
                    </Grid>
                </Grid>

                <DividerLine />

                {/* Copyright - Centered */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    mt: 1
                }}>
                    <CopyrightText onClick={() => handleNavigation('/copyright')}>
                        © 2026 Ishaavia Global Marketing. All rights reserved.
                    </CopyrightText>
                </Box>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;