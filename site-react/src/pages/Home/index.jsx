import { SectionMotives } from '../../components/SectionMotives';
import { SectionDeployments } from '../../components/SectionDeployments';
import { SectionValues } from '../../components/SectionValues';
import { SectionWeapons } from '../../components/SectionWeapons';
import { ArmasContextProvider } from '../../context/ArmasContext';

export function HomePage() {
    return (
        <div id="home-page">
            <div className="container">

                <ArmasContextProvider>
                    <SectionWeapons />
                </ArmasContextProvider>

                <SectionMotives />

                <SectionDeployments />

                <SectionValues />
            </div>
        </div>
    )
}