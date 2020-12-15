import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { ArticleType } from '../../../services/news';
import { Card } from '../../molecules/Card';
import { EntertainmentNewsData } from '../../../data';

type Props = {};

export function EntertainmentNews({}: Props) {
  const [newsData, setNewsData] = useState<ArticleType[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    const fetchEntertainmentNews = () => {
      setNewsData(EntertainmentNewsData);
    };
    fetchEntertainmentNews();
  }, []);
  const handlePress = () => {
    console.log('entertainment');
  };
  return (
    <View style={styles.root}>
      <FlatList
        contentContainerStyle={{
          paddingVertical: 22,
          paddingHorizontal: 5,
        }}
        data={newsData}
        keyExtractor={(item, index) => `${index}`}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => {}} />
        }
        ListHeaderComponent={
          <View>
            <Text>Header</Text>
          </View>
        }
        renderItem={({ item }) => (
          <Card article={item} handlePress={handlePress} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});
