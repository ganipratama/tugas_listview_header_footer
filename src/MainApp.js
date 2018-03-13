import	React,	{	Component	}	from	'react';
import	{
          StyleSheet,
          View,
          ListView,
          Image,
          Text,
        }	from	'react-native';
import	data	from	'./sales.json';

const	basketIcon	=	require('./images/idea.png');

class	MainApp	extends	Component	{
  constructor(props)	{
    super(props);
    const ds	=	new	ListView.DataSource({
    rowHasChanged:	(r1,	r2)	=>	r1	!==	r2
    });

    this.state	=	{
      dataSource:	ds.cloneWithRows(data),
    };
}
      renderRow(record)	{
        return	(
            <View	style={styles.row}>
            <View	style={styles.iconContainer}>
              <Image	source={basketIcon}	style={styles.icon}	/>
            </View>
            <View	style={styles.info}>
              <Text	style={styles.items}>{record.items}	Items</Text>
              <Text	style={styles.address}>{record.address}</Text>
            </View>
            <View	style={styles.total}>
              <Text	style={styles.date}>{record.date}</Text>
              <Text	style={styles.price}>${record.total}</Text>
            </View>
            </View>
          );												//	Defined	on	step	8
      }

      render()	{
          return	(
            <View	style={styles.mainContainer}>
            <View style={{ height: 60, backgroundColor: '#3498db', alignItems: 'center' }}>
                <Text>header</Text>
            </View>
            <Text	style={styles.title}>Sales</Text>
            <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            />
            <View style={{ height: 60, backgroundColor: '#ecf0f1', alignItems: 'center' }}>
                <Text>footer</Text>
            </View>
            </View>
            );
        }										//	Defined	on	step	7
      }

      const	styles	=	StyleSheet.create({
      mainContainer: { flex:	1, backgroundColor:	'#fff' },
      title:	{
                backgroundColor:	'#0f1b29',
                color:	'#fff',
                fontSize:	18,
                fontWeight:	'bold',
                padding:	10,
                paddingTop:	40,
                textAlign:	'center'
              },
      row:	{
                borderColor:	'#f1f1f1',
                borderBottomWidth:	1,
                flexDirection:	'row',
                marginLeft:	10,
                marginRight:	10,
                paddingTop:	20,
                paddingBottom:	20
      },
      iconContainer:	{
                alignItems:	'center',
                backgroundColor:	'#feb401',
                borderColor:	'#feaf12',
                borderRadius:	25,
                borderWidth:	1,
                justifyContent:	'center',
								height:	50,
                width:	50,
              },
      icon:	{
                tintColor:	'#fff',
                height:	22,
                width:	22,
              },
    });
export	default	MainApp;
