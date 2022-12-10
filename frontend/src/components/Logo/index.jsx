import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImg from '../../images/google.png';
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from '../responsive';

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.div`
float: ${({float}) => (float ? float : 'none')};
  width: ${({ size }) => (size ? size + 'em' : '2em')};
  height: ${({ size }) => (size ? size + 'em' : '2em')};
  border-radius: ${({ rounded }) => (rounded ? '50%' : 'none')};

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoTitle = styled.h2`
  position: absolute;
  float: ${({float}) => (float ? float : 'none')};
  margin: 20px;
  font-size: ${({ size }) => (size ? size + 'px' : '30px')};
  color: ${({ color }) => (color ? color : '#1F3F49')};
  font-weight: 900;
  margin-left: 6px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export function BrandLogo(props) {
  const { logoSize, textSize, color, hideLogo, hideLogoTitle, float } = props;

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <BrandLogoContainer>
      {!hideLogo && (
        <Link to="/home">
          <LogoImage size={logoSize} float={float}>
            <img src={LogoImg} alt="Ghana Hubs Network" />
          </LogoImage>
        </Link>
      )}
      {!isMobile && !hideLogoTitle && (
        <StyledLink to="/home">
          <LogoTitle size={textSize} color={color} float={float}>
            Hotelica
          </LogoTitle>
        </StyledLink>
      )}
    </BrandLogoContainer>
  );
}
