import { Text, View, Image, Card } from 'react-native'
import plutao from '../../assests/pluto.png'
import styles from "../../constants/style"

export default function TopArea() {
    return (
      <View>

        <Text style={styles.texto}>
          Most Popular -->
        </Text>
        <Card>
        <Card.Image  source={require(plutao)} />
        </Card>
        </View>
    )
}