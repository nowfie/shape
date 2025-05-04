import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

interface GridViewProps {
  data: any[];
  item: React.ComponentType<{ item: any }>;
  column: number;
  row?: number;
  className?: string;
}


const GridView = ({ data, item: RenderItem, column, row }: GridViewProps) => {
  const itemsPerPage = row ? row * column : data.length;
  const paginatedData = data.slice(0, itemsPerPage);

  const chunkedData: any[][] = [];
  for (let i = 0; i < paginatedData.length; i += column) {
    chunkedData.push(paginatedData.slice(i, i + column));
  }

  return (
    <View style={styles.container} className=' gap-3 xs:gap-4 lg:gap-5'>
      {chunkedData.map((rowData, rowIndex) => (
        <View style={styles.row} className=' gap-3 xs:gap-4 lg:gap-5' key={rowIndex}>
          {rowData.map((gridItem, columnIndex) => (
            <View style={styles.column} key={columnIndex}>
              <RenderItem item={gridItem} />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
  },
});

export default GridView;
