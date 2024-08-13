import { Modal, StyleSheet, Text, View } from 'react-native';
import { FunctionComponent, ReactNode } from 'react';

interface IAddGoalModal {
    isVisible: boolean;
    onToggle: () => void;
    children: ReactNode;
}

const AddGoalModal: FunctionComponent<IAddGoalModal> = ({ isVisible = false, onToggle, children }) => {
    return (
        <Modal
            style={styles.container}
            animationType={'slide'}
            transparent
            visible={isVisible}
        >
            <View style={styles.wrapper}>
                {children}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 22,
    },
    wrapper: {
        marginTop: 'auto',
        height: '75%',
        backgroundColor: '#240087',
        borderStartEndRadius: 32,
        borderStartStartRadius: 32,
    },
});

export default AddGoalModal;
