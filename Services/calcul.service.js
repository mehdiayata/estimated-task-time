const calculRealTime = (taskTime, selectedId) => {
    
    let optimisticTime = 0;
    let averageTime =  0;
    let pessimisticTime = 0;

    if (selectedId == 0) {
        // Easy
        optimisticTime = taskTime / 1.5;
        averageTime = taskTime * 1;
        pessimisticTime = taskTime * 2;

    } else if (selectedId == 1) {
        // Medium

        optimisticTime = taskTime * 1;
        averageTime = taskTime * 1.5;
        pessimisticTime = taskTime * 2.5;

    } else if (selectedId == 2) {
        // Hard
        optimisticTime = taskTime * 1.5;
        averageTime = taskTime * 1.5;
        pessimisticTime = taskTime * 4;

    } else {
        console.log('ERROR');
    }
    
    // Calcul + arrondi
    return Math.round(((averageTime * 4) + optimisticTime + pessimisticTime) / 6);
}

export default { calculRealTime };
