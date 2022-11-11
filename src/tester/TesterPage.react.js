/**
 * @flow strict-local
 * @author Jia Yu
 */

 import TesterHeader from './TesterHeader.react';
 import TesterStepper from './TesterStepper.react';
 import TesterTranscriptionCard from './TesterTranscriptionCard.react';
 import TesterTranslationCard from './TesterTranslationCard.react';
 
 import * as React from 'react';
 
 type Props = $ReadOnly<{}>;
 
 export default function TesterPage(_props: Props): React.MixedElement {
   return (
     <p>
       <div>
         <TesterHeader></TesterHeader>
       </div>
       <div>
         <TesterStepper></TesterStepper>
       </div>
       <div>
         <TesterTranscriptionCard></TesterTranscriptionCard>
       </div>
       <div>
         <TesterTranslationCard></TesterTranslationCard>
       </div>
     </p>
   );
 }
 