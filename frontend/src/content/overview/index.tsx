import {
  Box,
  Button,
  Card,
  Container,
  Stack,
  styled,
  Typography
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Logo from 'src/components/LogoSign';
import Hero from './Hero';
import Highlights from './Highlights';
import LanguageSwitcher from 'src/layouts/ExtendedSidebarLayout/Header/Buttons/LanguageSwitcher';
import { GitHub } from '@mui/icons-material';
import NavBar from '../../components/NavBar';

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);

function Overview() {
  const { t }: { t: any } = useTranslation();

  return (
    <OverviewWrapper>
      <Helmet>
        <title>Atlas</title>
      </Helmet>
      <NavBar />
      <Hero />
      <Highlights />
    </OverviewWrapper>
  );
}

export default Overview;
