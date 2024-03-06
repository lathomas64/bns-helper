import React from 'react';
import { Text, View, Button } from 'react-native';

class Character extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            maxBlood: 12,
            Blood: 12,
            maxHealth: 9,
            Health: 9,
            maxWillpower: 6,
            Willpower: 6,
            "Beast Traits": 0,
            "Derangement Traits": 0,
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
            <this.Resource name="Blood" self={this} state={this.state} maxValue={this.state.maxBlood}/>
            <this.Resource name="Willpower" self={this} state={this.state} maxValue={this.state.maxWillpower} />
            <this.Resource name="Health" self={this} state={this.state} maxValue={this.state.maxHealth} />
            <this.Resource name="Beast Traits" self={this} state={this.state} maxValue="1000" />
            <this.Resource name="Derangement Traits" self={this} state={this.state} maxValue="3" />
            <Text>Mental Defense = {10 + this.state.Willpower}</Text>
            <Text>Social Defense = {10 + this.state.Willpower}</Text>
            <Text>Dodge = 21 (free retest)</Text>
            <Text>Initiative = 20</Text>
            <Text>Melee 19 (accurate sword)</Text>
            <Text> Convert 2 agg, soak 1 normal</Text>
            <Text> 3 actions/turn</Text>
            <Text>2 blood/turn</Text>
            <Text>No willpower: Burst of Speed, Quick Draw, Pierce the Heart.</Text>
            <Text>Dont take up physical slot: Blinding Attack, Disarm, Knockdown.</Text>
            </View>);
    }
}

export default Character;