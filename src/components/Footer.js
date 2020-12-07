import React from "react"
import {usestaticquery, graphql, useStaticQuery} from "gatsby"
import {FooterWrapper, FooterSocialWrapper, FooterSocialIcons} from "../elements"

export const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            instagram: file(relativePath: {eq: "instagram.svg"}) {
                publicURL
            }
            pinterest: file(relativePath: {eq: "pinterest.svg"}) {
                publicURL
            }
            github: file(relativePath: {eq: "github.svg"}) {
                publicURL
            }
            wordpress: file(relativePath: {eq: "wordpress.svg"}) {
                publicURL
            }
        }
    `)
    return <FooterWrapper>
        <FooterSocialWrapper>
            <FooterSocialIcons>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={data.instagram.publicURL} />
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                    <img src={data.pinterest.publicURL} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <img src={data.github.publicURL} />
                </a>
                <a href="https://flaviamedici.com" target="_blank" rel="noopener noreferrer">
                    <img src={data.wordpress.publicURL} />
                </a>
            </FooterSocialIcons>
            <p>2020 Flavia Medici. All Rights Reserved.</p>
        </FooterSocialWrapper>
    </FooterWrapper>
}