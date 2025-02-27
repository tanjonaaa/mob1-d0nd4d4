import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
      },
      scrollContent: {
        flexGrow: 1,
      },
      header: {
        padding: 20,
        paddingTop: 40,
      },
      name: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'capitalize',
      },
      number: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.8)',
        marginTop: 5,
      },
      contentContainer: {
        flex: 1,
        position: 'relative',
      },
      imageWrapper: {
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        top: -60,
        zIndex: 1,
      },
      image: {
        width: 200,
        height: 200,
      },
      detailsCard: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flex: 1,
        marginTop: 120,
        padding: 20,
      },
      tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
      },
      tab: {
        color: '#999',
        fontSize: 16,
      },
      activeTab: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
      },
      typeContainer: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
      },
      typeTag: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
      },
      typeText: {
        color: 'white',
        fontWeight: 'bold',
      },
      statsContainer: {
        gap: 15,
      },
      statRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      },
      statName: {
        width: 80,
        fontSize: 14,
        color: '#666',
      },
      statValue: {
        width: 30,
        fontSize: 14,
        fontWeight: 'bold',
      },
      statBarContainer: {
        flex: 1,
        height: 4,
        backgroundColor: '#f0f0f0',
        borderRadius: 2,
      },
      statBar: {
        height: '100%',
        borderRadius: 2,
      },
      tabContent: {
        padding: 20,
      },
      infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
      },
      infoLabel: {
        color: '#666',
        fontSize: 16,
      },
      infoValue: {
        fontSize: 16,
        fontWeight: '500',
      },
      movesContainer: {
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
      },
      moveItem: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 10,
      },
      moveName: {
        textTransform: 'capitalize',
        fontSize: 14,
      },
      evolutionContainer: {
        padding: 20,
        alignItems: 'center',
      },
      evolutionText: {
        fontSize: 16,
        color: '#666',
      }
}); 