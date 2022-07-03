import { $dark, $white } from "../../variables.modules.scss";

export default function AnimationOff({darkMode}) {

   return (
    <div
         style={{
         height: '100%',
         width: '100%',
         display: 'block',
         position: 'fixed',
         zIndex: '-2',
         color: 'white',
         backgroundSize: 'cover',
         backgroundColor: darkMode === false ? '#f8f8f8' : '#1f1f1f'
         }}>

       </div>
 )
}