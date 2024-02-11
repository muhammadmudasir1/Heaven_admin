import React, { useState } from 'react'
import { useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Detail = () => {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        // Check if it's the first time opening
        const isFirstTime = localStorage.getItem('isFirstTime') === null;

        // If it's the first time, set isOpen to true
        if (isFirstTime) {
            setIsOpen(true);
            localStorage.setItem('isFirstTime', 'false');
        }
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='my-8 relative'>
            <div className={`bg-[#F8F8F8] px-20 py-24 ${isOpen ? 'block' : 'hidden'}`}>
                <div class="grid grid-cols-8 gap-7">
                    <div class="col-span-2">
                        <img src="https://static.wixstatic.com/media/5d104f_942ed39e2eb04f3690ce73118799546d~mv2.jpg/v1/crop/x_42,y_0,w_1115,h_675/fill/w_478,h_288,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Creality%20K1.jpg" alt="" />
                    </div>
                    <div class="col-span-6 ">
                        <h1 className='font-bold text-xl'>Lifermfung:</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                            ,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor i
                            nvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                            # et ea rebum. </p>

                    </div>
                </div>

                <div class="grid grid-cols-8 gap-7 py-8">
                    <div class="col-span-2 ">

                        <img src="https://static.wixstatic.com/media/5d104f_942ed39e2eb04f3690ce73118799546d~mv2.jpg/v1/crop/x_42,y_0,w_1115,h_675/fill/w_478,h_288,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Creality%20K1.jpg" alt="" className='pb-7' />

                        <img src="https://static.wixstatic.com/media/5d104f_942ed39e2eb04f3690ce73118799546d~mv2.jpg/v1/crop/x_42,y_0,w_1115,h_675/fill/w_478,h_288,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Creality%20K1.jpg" alt="" />


                    </div>
                    <div class="col-span-6 ">
                        <h1 className='font-bold text-xl'>Hardware:</h1>
                        <ul className='list-disc px-7'>
                            <li>
                                3D Drucker
                            </li>
                            <li>
                                Imbus-Set 1,5/2/2,5/3/4
                            </li>
                            <li>
                                Bedienungsanleitung (deutsch)
                            </li>
                            <li>
                                6er Gabelschlüssel für die Düse
                            </li>
                            <li>
                                10er Gabelschlüssel
                            </li>
                            <li>
                                Kleiner Kreuzschlitz und Schlitzschraubenzieher
                            </li>
                            <li>
                                Uhrmacher-Feinzange
                            </li>
                            <li>
                                Plastikspatel
                            </li>
                            <li>
                                Düsenreiniger
                            </li>
                            <li>
                                2 x Ersatzdüse
                            </li>
                            <li>
                                1 x Ersatz PFTE-Schlauch Inlay
                            </li>
                            <li>
                                USB-Micro SD Karten Adapter
                            </li>
                            <li>
                                10m weißes Filament
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="grid grid-cols-8 gap-7">
                    <div class="col-span-2">
                        <img src="https://static.wixstatic.com/media/5d104f_942ed39e2eb04f3690ce73118799546d~mv2.jpg/v1/crop/x_42,y_0,w_1115,h_675/fill/w_478,h_288,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Creality%20K1.jpg" alt="" />
                    </div>
                    <div class="col-span-6 ">
                        <h1 className='font-bold text-xl'>Software:</h1>
                        <ul className='list-disc px-7'>
                            <li>
                                3D Drucker
                            </li>
                            <li>
                                Imbus-Set 1,5/2/2,5/3/4
                            </li>
                            <li>
                                Bedienungsanleitung (deutsch)
                            </li>
                            <li>
                                6er Gabelschlüssel für die Düse
                            </li>
                            <li>
                                10er Gabelschlüssel
                            </li>
                        </ul>

                    </div>
                </div>

                <div class="grid grid-cols-8 gap-7 py-8">
                    <div class="col-span-2">
                        <img src="https://static.wixstatic.com/media/5d104f_942ed39e2eb04f3690ce73118799546d~mv2.jpg/v1/crop/x_42,y_0,w_1115,h_675/fill/w_478,h_288,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Creality%20K1.jpg" alt="" className='pb-7' />

                        <img src="https://static.wixstatic.com/media/5d104f_942ed39e2eb04f3690ce73118799546d~mv2.jpg/v1/crop/x_42,y_0,w_1115,h_675/fill/w_478,h_288,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Creality%20K1.jpg" alt="" />
                    </div>
                    <div class="col-span-6 ">
                        <h1>Unboxing & Aufbau:</h1>
                        <p>

                            Der Printer kommt gut verpackt an. Beigefügt ist ein wichtiger Hinweis, auf dem unter anderem erklärt wird, wie die Spannung der Nylonlaufrollen-Paare eingestellt werden kann.<br />
                            Zu Beginn wird der obere Rahmen durch vier Schrauben mit der unteren Plattform fixiert. Danach die elektronischen Systemstecker beider Z-Motoren, Endschalter für z- und x-Achse und Druckkopf miteinander verbinden. Nun wird der Filament-Rollenhalter inklusive Runout-Sensor angebracht und die Touchscreen-Halterung verschraubt.<br />
                            Bei den meisten von mir getesteten 3D Druckern, haben sich die Nylon-Laufrollen durch den Transport gelockert. Sie sollten eine stabile Führung mit wenig Spiel haben, aber auch nicht zu schwergängig sein. Es ist ein kleines Detail, welches bei richtiger Einstellung erheblich die Druckqualität verbessert.  </p>

                    </div>
                </div>

                <div class="grid grid-cols-8 gap-7 py-8">
                    <div class="col-span-2">
                        <img src="https://static.wixstatic.com/media/5d104f_942ed39e2eb04f3690ce73118799546d~mv2.jpg/v1/crop/x_42,y_0,w_1115,h_675/fill/w_478,h_288,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Creality%20K1.jpg" alt="" className='pb-7' />

                        <img src="https://static.wixstatic.com/media/5d104f_942ed39e2eb04f3690ce73118799546d~mv2.jpg/v1/crop/x_42,y_0,w_1115,h_675/fill/w_478,h_288,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Creality%20K1.jpg" alt="" />
                    </div>
                    <div class="col-span-6 ">
                        <h1 className='font-bold text-xl'>Inbetriebnahme:</h1>
                        <p>
                            Vor dem ersten Druck muss der 3D Drucker kalibriert werden. Dies übernimmt das vollautomatische Auto-Bed-Leveling. Die Daten dafür erfasst ein kapazitiver Sensor am Druckkopf. Der Sensor besteht aus einer zentralen Messelektrode, die von einer Schirmelektrode umgeben wird. Sie erzeugt ein elektrisches Feld, welches von der Messelektrode überwacht wird. Nähert der kapazitive Sensor sich dem Druckbett, registriert er dies im Zehntel Millimeter Bereich.<br />
                            Der Pro vermisst sein Druckbett an 36 Punkten. Danach wird noch Abstand von Düse zu Druckbett eingestellt, der sogenannte Z-Offset.<br />
                            Als ultimativ genormter Abstandshalter hat sich handelsübliches Papier durchgesetzt. Dieses ist mit einer Stärke von 0,1 mm genormt und immer zur Hand. Nach Druckbettvermessung, Z-Offset Einstellung folgt die Slicer-Konfiguration.  </p>

                    </div>
                </div>

            </div>
            <div onClick={toggleDropdown} className='absolute top-0 right-0 bg-[#F8F8F8] w-full'>
                {isOpen ? <IoIosArrowUp size={40} /> : <IoIosArrowDown size={40}/>}
            </div>
        </div>
    )
}

export default Detail
