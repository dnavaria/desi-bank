import React from 'react';
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
    const loggedIn = {
        firstName: "Deepak", lastName: "Navaria",
        email: "dnavaria15+github@gmail.com"
    }
    return (
        <section className={'home'}>
            <div className={"home-content"}>
                <header className={"home-header"}>
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || "Guest"}
                        subtext="Access and manage your accounts and transactions efficiently."
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.50}
                    />
                </header>
                RECENT TRANSACTIONS
            </div>
            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance: 123.50}, {currentBalance: 200.55}]}
            />
        </section>
    );
}

export default Home;