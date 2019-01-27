import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, ScrollView, RefreshControl } from 'react-native'
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
        this.state.userSuccesses.forEach( success => {
            if(success == name) {
                result = true;
            }
        });
        return result;
    }

    render() {

        return (
            <View>
                <ScrollView style={styles.container} refreshControl={
                    <RefreshControl
                        onRefresh={() => this._loadDatas()}
                        refreshing={this.state.refreshing}
                    />
                }>
                    <Text style={styles.refreshText}>Scroll Top to refresh</Text>
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

const styles = StyleSheet.create({})
