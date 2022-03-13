import { ScrollView, View } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { BarChart, Grid, LineChart } from 'react-native-svg-charts'
import { Text } from '../../components';

const Dashboard = () => {

    const fill = 'rgb(255, 104, 99)'
    const data_bar = [50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80]
    const data_line = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

    return (
        <LinearGradient
            // Background Linear Gradient
            colors={['#FF6863', '#fff', '#fff']}
            style={{ flex: 1 }}
        >
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollview}>
                <View style={styles.card}>
                    <Text style={styles.card_header}>Sales</Text>
                    <BarChart style={{ height: 200 }} data={data_bar} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
                        <Grid />
                    </BarChart>
                </View>
                <View style={styles.card}>
                    <Text style={styles.card_header}>Sales per week</Text>
                    <LineChart
                        style={{ height: 200 }}
                        data={data_line}
                        svg={{ stroke: '#FF6863' }}
                        contentInset={{ top: 20, bottom: 20 }}
                    >
                        <Grid />
                    </LineChart>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

export default Dashboard