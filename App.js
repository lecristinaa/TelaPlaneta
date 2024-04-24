import { View } from 'react-native' // Importing native components
import { Button, TextInput } from 'react-native-paper' // Importing from libraries
import TopArea from './src/components/TopArea/index.jsx' // Importing custom components
import MiddleArea from './src/components/MiddleArea/index.jsx'
import styles from './src/constants/style' // Importing styles
import portugese from './src/constants/i18n/english' // Importing constants


// Variáveis globais

export default function App() {
  return (
    <View style={styles.background}>
        <TopArea />
        <MiddleArea />
    </View>
  )
}