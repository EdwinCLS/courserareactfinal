import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import styles from "../Componentes/CSS/Header.module.css";

import logo from "../imagenes/Logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header className={styles.appHeader}>
        <div>
          <img className={styles.imag} src={logo} alt="logo" />
        </div>
        <nav className={styles.navbar}>
          <Breadcrumb
            className={styles.breadcrumb}
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem className={styles.breadcrumbitem}>
              <BreadcrumbLink className={styles.breadcrumblink} href="#">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem className={styles.breadcrumbitem}>
              <BreadcrumbLink className={styles.breadcrumblink} href="#">
                About
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem className={styles.breadcrumbitem}>
              <BreadcrumbLink className={styles.breadcrumblink} href="#">
                Menu
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem className={styles.breadcrumbitem}>
              <BreadcrumbLink
                className={styles.breadcrumblink}
                as={Link}
                to="/BookingPage"
              >
                Reserve table
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem className={styles.breadcrumbitem}>
              <BreadcrumbLink className={styles.breadcrumblink} href="#">
                Order online
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem className={styles.breadcrumbitem}>
              <BreadcrumbLink className={styles.breadcrumblink} href="#">
                Login in
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </nav>
      </header>
    </>
  );
}

export default Header;
