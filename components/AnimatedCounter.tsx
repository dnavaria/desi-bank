"use client";
import CountUp from 'react-countup';

function AnimatedCounter({amount}: {amount: number} ) {
    return (
        <div className={""}>
            <CountUp
                start={0}
                end={amount}
                duration={1}
                separator=","
                decimals={2}
                decimal="."
                prefix="$"
            />
        </div>
    );
}

export default AnimatedCounter;