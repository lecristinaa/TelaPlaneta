import { Text, View } from 'react-native'
import styles from "../../constants/style"

export default function TopArea() {
    return (
      <View>
        <Text style={styles.titulo}>
          Let's Explore
        </Text>

        <Text style={styles.texto}>
          The milky way galaxy
        </Text>
        
        </View>
    )
}