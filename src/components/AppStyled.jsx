import styled from 'styled-components';
import { centerBlock, font } from '../helpers/mixins';

export const Container = styled.div`
  padding: 0px 16px;
  width: 1004px;
  ${centerBlock};
`;
export const Section = styled.section`
  padding: 80px 0px;
  text-align: center;
`;

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const BoxWrapper = styled.div`
  text-align: start;
`;

export const HeroTitle = styled.h1`
  font-family: ${props => props.theme.fonts.secondary};
  ${font({ fs: 34, fw: 600, lh: 38 })};
  margin-bottom: ${props => props.theme.spacing(3)};
  color: ${props => props.theme.colors.secondaryText};
  text-shadow: 1px 1px 1px ${props => props.theme.colors.white};
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.secondary};
  ${font({ fs: 28, fw: 600, lh: 32 })};
  margin-bottom: ${props => props.theme.spacing(3)};
  color: ${props => props.theme.colors.secondaryText};
  text-shadow: 1px 1px 0 ${props => props.theme.colors.white};
`;

export const SubTitle = styled.h3`
  font-family: ${props => props.theme.fonts.secondary};
  ${font({ fs: 24, fw: 600, lh: 28 })};
  margin-bottom: ${props => props.theme.spacing(3)};
  color: ${props => props.theme.colors.secondaryText};
  text-shadow: 1px 1px 0 ${props => props.theme.colors.white};
`;

export const TextContent = styled.p`
  font-family: ${props => props.theme.fonts.secondary};
  ${font({ fs: 20, fw: 600, lh: 24 })};
  margin-bottom: ${props => props.theme.spacing(3)};
  margin-top: ${props => props.theme.spacing(4)};
  color: ${props => props.theme.colors.secondaryText};
  text-shadow: 1px 1px 0 ${props => props.theme.colors.white};
`;
