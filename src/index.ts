class Main {
    static run(times?: number) {
        times = times || 1;
        for(let i=0; i<times; i++) {
            console.log('boom');
        }
    }
}

Main.run(3);
