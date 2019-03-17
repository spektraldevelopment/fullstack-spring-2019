import React, { Component } from 'react';

import {
    Card,
    CardHeader,
    Avatar,
    CardContent,
    Typography

} from '@material-ui/core'


class Pokemon extends Component {

    state = {
        base_exp: null,
        stats: []
    };

    componentDidMount() {

        const url = 'https://pokeapi.co/api/v2';
        //const { url } = this.props;

        fetch(`${url}/pokemon/${this.props.name}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                const currentState = this.state;
                const nextState = {
                    base_exp: data.base_experience,
                    image: data.sprites.front_default,
                    stats: data.stats.map((stat) => {
                       return {
                           value: stat.base_stat,
                           name: stat.stat.name,
                           url: stat.stat.url
                       };

                    })
                }
                this.setState(Object.assign({}, currentState, nextState));
            });
    }

    render() {

        const { name } = this.props;

        const { base_exp, image } = this.state;

        return(
            <>
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar src={image}></Avatar>
                        }
                        title={name}
                        subheader={`Base Experience: ${base_exp}`}
                    />

                    <CardContent>
                        {
                            //all the stats
                            this.state.stats.map((stat) => {
                                return (
                                    <React.Fragment key={stat.url}>
                                        <Typography>
                                            {stat.name}
                                        </Typography>
                                        <Typography>
                                            {stat.value}
                                        </Typography>
                                        <Typography>
                                            {stat.url}
                                        </Typography>
                                    </React.Fragment>
                                )
                            })
                        }
                    </CardContent>
                    
                </Card> 
            </>
        );
    }
}

export default Pokemon;