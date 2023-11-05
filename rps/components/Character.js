import React from 'react';
import { Text, View, Button } from 'react-native';

class Character extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            maxBlood: 12,
            blood: 12,
            maxHealth: 9,
            health: 9,
            maxWillpower: 6,
            willpower: 6,
            name: "Daria Gray"
        }
    }
    Resource = (props) => {

    function increase() {
        props.self.setState({ [props.name]: Math.min(props.self.state[props.name] + 1, props.maxValue) });
    }

    function decrease() {
        props.self.setState({ [props.name]: Math.max(props.self.state[props.name] - 1, 0) });
    }

    return (
        <View>
            <Text> </Text>
            <Text>{props.name} {this.state[props.name]}/{props.maxValue}<Button title="-" onPress={() => decrease()} />
                <Button title="+" onPress={() => increase()} /></Text>
        </View>
    );
}
    render() {
        return (<View>
            <Text>{this.state.name}</Text>
            <this.Resource name="blood" self={this} state={this.state} maxValue={this.state.maxBlood}/>
            <this.Resource name="willpower" self={this} state={this.state} maxValue={this.state.maxWillpower} />
            <this.Resource name="health" self={this} state={this.state} maxValue={this.state.maxHealth} />
            <Text>Mental Defense = {10 + this.state.willpower}</Text>
            <Text>Social Defense = {10 + this.state.willpower}</Text>
            <Text>Dodge = 21</Text>
            <Text>Initiative = 20</Text>
            <Text>Melee 19 (accurate sword)</Text>
            <Text> Convert 2 agg, soak 1 normal</Text>
            <Text> 3 actions/turn</Text>
            <Text>2 blood/turn</Text>
            </View>);
    }
}

export default Character;