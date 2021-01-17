import React from "react";
import "./FooterLinks.scss";
import {
  inspirableLinks,
  helpLinks,
  legalLinks,
} from "../config/buttons-footer";
import Link from 'next/link'

const FooterLinks = () => (
  <div className="footerLink">
    <div className="footerLink-column">
      <h2>INSPIRABLE</h2>
      {inspirableLinks.map((link, key) => (
      <Link key={key} href={link.path} >
        <span>{link.label}</span>
      </Link>
      ))}
    </div>
    <div className="footerLink-column">
      <h2>HELP & SUPPORT </h2>

      {helpLinks.map((link, key) => (
        <Link key={key} href={link.path} >
         <span>{link.label}</span>
        </Link>
       
      ))}
    </div>
    <div className="footerLink-column">
      <h2>LEGAL</h2>
      {legalLinks.map((link, key) => (
       <Link key={key} href={link.path} >
       <span>{link.label}</span>
      </Link>
      ))}

    </div>
  </div>
);

export default FooterLinks;
