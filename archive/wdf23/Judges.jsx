import React from 'react'
import { useMediaQuery } from 'react-responsive'
import './Judges.css'

import judgeImage1 from './imgs/judge-1.png'
import judgeImage2 from './imgs/judge-2.png'
import judgeImage3 from './imgs/judge-3.png'

export default function Judges() {
    return (
        <div className='judges'>
            <div className='judges-title'>Judges</div>
            <div className='judges-container'>
                <Judge
                    name={'Jordan Owashi'}
                    description={'Jordan works at a mental health startup, [Curio](http://www.joincurio.com/), by day, and is an illustrator and watercolorist by night. She illustrated her first self-published children’s book last year, [She Believed She Could So…She Traveled The World!](https://www.amazon.com/She-Believed-Could-Traveled-World/dp/B0B5LB1F98/ref=sr_1_1?keywords=jordan+owashi&qid=1672796170&s=books&sr=1-1), and is currently working on her next. She loves to work with pastels, watercolor, color pencil, as well as digitally in Adobe Fresco.'}
                    mobileDescription={'Designer @Curio by day, Illustrator by night'}
                    image={judgeImage1}
                    padding={'large'}
                />
                <Judge
                    name={'Jeanette Zhu (aka JZ)'}
                    description={'Jeanette is a content creator, designer, and illustrator with 9+ years of experience in creating brands and content for the digital age.<br><br>As a content creator, JZ creates aesthetic art for the soul: illustrations, designs, and animations that talk about modern life and what it means to be human. As a designer, JZ has helped transform the branding strategy and design capabilities of dozens of clients (incl. Facebook, Dropbox, and Spotify).'}
                    mobileDescription={'Art content creator and designer'}
                    image={judgeImage2}
                    padding={'small'}
                />
                <Judge
                    name={'Alyssa Long'}
                    description={'After graduating from UCSB in 2021, Alyssa began her role as the communications designer for tonies, a German toy company. She writes and design their email communications, ads, and other creative marketing materials.'}
                    mobileDescription={'Communication designer'}
                    image={judgeImage3}
                    padding={'large'}
                />
            </div>
        </div>
    )
}

function Judge({ name, description, mobileDescription, image, padding }) {
    const isMobile = useMediaQuery({ query: `(max-width: 1300px)` });

    let descriptionToUse = !isMobile ? description : mobileDescription

    let noLinksDescription = descriptionToUse.split(/\[.+?\]\(.+?\)/)
    let links = (descriptionToUse.match(/\[(.+?)\]\((.+?)\)/g) ?? []).map(linkString => /\[(.+?)\]\((.+?)\)/g.exec(linkString).slice(1))

    return (
        <div className={'judge judge-' + padding + '-padding'}>
            <img className='judge-image' src={image} alt='' />
            <div className='judge-text'>
                <div className='judge-name'>{name}</div>
                <div className='judge-description'>
                    {
                        noLinksDescription.map((text, i) => {
                            if (!links[i]) return (<span dangerouslySetInnerHTML={{__html: text}}></span>)
                            return (
                                <>
                                {text}<a className={'judge-description-link'} href={links[i][1]}>{links[i][0]}</a>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}