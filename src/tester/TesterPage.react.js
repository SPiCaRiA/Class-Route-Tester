/**
 * @flow strict-local
 * @author Jia Yu
 */

 import TesterHeader from './TesterHeader.react';
 import TesterStepper from './TesterStepper.react';
 import TesterTranscriptionCard from './TesterTranscriptionCard.react';
 import TesterTranslationCard from './TesterTranslationCard.react';
 
 import Box from '@mui/material/Box';
 import Grid from '@mui/material/Grid';
 import Stack from '@mui/material/Stack';
 import * as React from 'react';
 
 type Props = $ReadOnly<{}>;
 
 export default function TesterPage(_props: Props): React.MixedElement {
   return (
     <p>
       <div>
         <TesterHeader></TesterHeader>
       </div>
       <Grid
         sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
         <div>
           <TesterStepper></TesterStepper>
         </div>
         <Grid sx={{m: 1, position: 'relative'}}>
           <div>
             <TesterTranscriptionCard></TesterTranscriptionCard>
             <TesterTranslationCard></TesterTranslationCard>
           </div>
         </Grid>
       </Grid>
     </p>
   );
 }
 