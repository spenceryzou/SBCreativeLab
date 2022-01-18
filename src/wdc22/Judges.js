import React from 'react'
import Judge from './Judge'
import './Judges.css'
import './Judge.css'

import alice_name from './imgs/alice-chein-name.svg'
import leaf from './imgs/leaf.svg'
import treev2 from './imgs/tree-v2.svg'
import bianca_name from './imgs/bianca-dunn-name.svg'
import plane from './imgs/small-plane.svg'
import hannah_name from './imgs/hannah-klink-name.svg'
import leafv2 from './imgs/leaf-v2.svg'
import judge_dec from './imgs/judge-dec.svg'
import sun from './imgs/sun-big.svg'

import alice_mobile from './imgs/alice-mobile.svg'
import bianca_mobile from './imgs/bianca-mobile.svg'
import hannah_mobile from './imgs/hannah-mobile.svg'
import water_drop from './imgs/water-drop.svg'


export default function Judges() {
    return (
        <div className='judges-page-component'>
            <h1 className='judges-header'>Judges</h1>
            {/* Mobile version */}
            <div className='judges-mobile'>
                <div className='judge-card-mobile'>
                    <img className='judge-mobile' src={alice_mobile}></img>
                    <div className='judge-bullet-point'>
                        <div className='water-drop'>
                            <img className='water-drop-img' src={water_drop}></img>
                        </div>
                        <p className='judge-p'>Based in <span className='judge-p-bold'>Santa Barbara, CA / Maui</span></p>
                    </div>
                    <div className='judge-bullet-point'>
                        <div className='water-drop'>
                                <img className='water-drop-img' src={water_drop}></img>
                        </div>
                        <div className='ucsb-alum'>
                            <p className='judge-p-bold'>UCSB Alumni</p>
                            <p className='judge-p'>BA in Communication at UCSB 2008</p>
                        </div>
                    </div>
                </div>

                <div className='judge-card-mobile'>
                <img className='judge-mobile' src={bianca_mobile}></img>
                    <div className='judge-bullet-point'>
                        <div className='water-drop-judge-2'>
                            <img className='water-drop-img' src={water_drop}></img>
                        </div>
                        <p className='judge-p'>Based in <span className='judge-p-bold'>Brooklyn, NY</span></p>
                    </div>
                    <div className='judge-bullet-point'>
                        <div className='water-drop-judge-2'>
                                <img className='water-drop-img' src={water_drop}></img>
                        </div>
                        <div className='ucsb-alum'>
                            <p className='judge-p-bold'>UCSB Alumni</p>
                            <p className='judge-p'>BS in Microbiology at UCSB 2017</p>
                        </div>
                    </div>
                </div>

                <div className='judge-card-mobile'>
                    <img className='judge-mobile' src={hannah_mobile}></img>
                    <div className='judge-bullet-point'>
                        <div className='water-drop'>
                            <img className='water-drop-img' src={water_drop}></img>
                        </div>
                        <p className='judge-p'>Based in <span className='judge-p-bold'>Tulsa, Oklahoma</span></p>
                    </div>
                    <div className='judge-bullet-point'>
                        <div className='water-drop'>
                                <img className='water-drop-img' src={water_drop}></img>
                        </div>
                            <p className='judge-p'>Member of the Design Buddies team as an Illustrator/Motion Designer</p>
                    </div>
                </div>

            </div>

            <div className='judges'>
                {/* For desktop version */}
                <div className='judge-1'>
                    <div className='judge-1-name'>
                        <img className='judge-img'src={alice_name} alt='Alice Chein'></img>
                    </div>
                    <div className='judge-1-leaf'>
                        <img className='judge-img' src={leaf} alt=''></img>
                    </div>
                    <div className='judge-1-tree'>
                        <img className='judge-img' src={treev2} alt=''></img>
                    </div>
                    <Judge
                        headshot='./images/wdc22_imgs/alice-chein.svg'
                        job1='Freelance Graphic'
                        job2='&amp; Web Designer'
                        location='Santa Barbara, CA / Maui'
                        major='BA in Communication at UCSB 2008'
                    />
                </div>
                <div className='judge-2'>
                    <div className='judge-2-name'>
                        <img className='judge-img'src={bianca_name} alt='Bianca Dunn'></img>
                    </div>
                    <div className='judge-2-dec'>
                        <img className='judge-img' src={plane} alt=''></img>
                    </div>                        
                    <Judge 
                        headshot='./images/wdc22_imgs/bianca-dunn.svg'
                        job1='Freelance Graphic Designer'
                        job2='&amp; Illustrator'
                        location='Brooklyn, NY'
                        major='BS in Microbiology at UCSB 2017'
                    />
                </div>
                <div className='judge-3'>
                    <div className='judge-3-name'>
                        <img className='judge-img'src={hannah_name} alt='Hannah Klink'></img>
                    </div>
                    <div className='judge-3-dec'>
                        <img className='judge-img' src={leafv2} alt=''></img>
                    </div> 
                    <Judge 
                        headshot='./images/wdc22_imgs/hannah-klink.svg'
                        job1='Freelance Graphic Designer'
                        job2='&amp; Illustrator'
                        location='Tulsa, Oklahoma'
                        desc='Member of the Design Buddies team as an Illustrator/Motion Designer'
                    />
                </div>
            </div>
            <div>
                <img className='judges-dec-img' src={judge_dec} alt=''></img>
            </div>
            <div className='sun-large'>
                <img clasName='sun-img-large' src={sun}></img>
            </div>
        </div>

    )
}