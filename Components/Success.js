import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, ScrollView, RefreshControl } from 'react-native'
import * as Progress from 'react-native-progress';
import { getGccApiAllSuccesses, getGccApiUserSuccesses } from '../API/GCC_API';
import SuccessItem from './SuccessItem';

export default class Success extends Component {

    constructor(props) {
        super(props);
        this.state = {
            successes: [],
            userSuccesses: [],
            refreshing: false,
        };
    }

    componentDidMount() {
        getGccApiAllSuccesses()
            .then(data => {
                this.setState({ successes: data });
            });
        this._loadDatas();
    }

    _loadDatas() {
        this.setState({ refreshing: true });
        getGccApiUserSuccesses(1)
            .then(data => {
                this.setState({ userSuccesses: data });
            });
        this.setState({ refreshing: false });
    }

    _isUserGetSuccess(name) {
        let result = false;
        this.state.userSuccesses.forEach(success => {
            if (success == name) {
                result = true;
            }
        });
        return result;
    }

    render() {
        let userSuccessCount = this.state.userSuccesses.length;
        let successCount = this.state.successes.length;
        let progressValue = userSuccessCount / successCount;
        if(!(progressValue > 0)) {
            progressValue = 0;
        }
        return (
            <View>
                <ScrollView style={styles.container} refreshControl={
                    <RefreshControl
                        onRefresh={() => this._loadDatas()}
                        refreshing={this.state.refreshing}
                    />
                }>
                    <View style={styles.bar}>
                        <Text style={styles.barText}>{userSuccessCount} successes on {successCount} complete !</Text>
                        <Progress.Bar
                            progress={progressValue}
                            width={300}
                            height={15}
                            borderRadius={5}
                            color='green'
                        />
                    </View>
                    {/*                     <Text style={styles.refreshText}>Scroll Top to refresh</Text> */}
                    <FlatList
                        data={this.state.successes}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={
                            ({ item }) =>
                                <SuccessItem
                                    success={item}
                                    userSuccess={this._isUserGetSuccess(item.name)}
                                    nav={this.props.navigation}
                                />
                        }
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bar: {
        paddingTop: 20,
        paddingBottom: 20,
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
    barText: {
        color: 'green',
        paddingBottom: 5,
        fontWeight: 'bold',
    },
})
