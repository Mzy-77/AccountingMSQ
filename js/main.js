const mcqData = [
    { q: "Closing entries are necessary for …………. .", opts: ["permanent accounts only.", "temporary accounts only.", "both permanent and temporary accounts.", "permanent or real accounts only."], ans: 1 },
    { q: "Each of the following accounts is closed to Income Summary except..", opts: ["Expenses.", "Owner's Drawing.", "Revenues.", "All of these are closed to Income Summary"], ans: 1 },
    { q: "Closing entries …………… .", opts: ["are prepared before the financial statements.", "reduce the number of permanent accounts.", "cause the revenue and expense accounts to have zero balances.", "summarize the activity in every account"], ans: 2 },
    { q: "In order to close the owner's drawing account, the …………… .", opts: ["income summary account should be debited.", "income summary account should be credited.", "owner's capital account should be credited.", "owner's capital account should be debited."], ans: 3 },
    { q: "The entry to close the revenue account includes a …………. (Revenues $70,000; Net loss $3,500).", opts: ["debit to Income Summary for $3,500.", "credit to Income Summary for $3,500.", "debit to Revenues for $70,000.", "credit to Revenues for $70,000."], ans: 2 },
    { q: "The entry to close the expense accounts includes a ……………. (Total expenses $73,500).", opts: ["debit to Income Summary for $3,500.", "credit to Income Summary for $3,500.", "debit to Income Summary for $73,500.", "debit to Wages Expense for $2,500."], ans: 2 },
    { q: "After the revenue and expense accounts have been closed, the balance in Income Summary will be ………… .", opts: ["$0.", "debit balance of $3,500.", "credit balance of $3,500.", "credit balance of $70,000"], ans: 1 },
    { q: "The entry to close Income Summary to Nova, Capital includes …………... .", opts: ["debit to Revenue for $70,000.", "credit to Expenses totaling $73,500.", "a credit to Income Summary for $3,500.", "a credit to Nova, Capital for $3,500."], ans: 2 },
    { q: "On January 1, 2008, Nova reported owner's equity of $50,000. Owner drawings totaled $10,000. Net loss $3,500. On December 31, 2008, the company will report owner's equity of ……….. ", opts: ["$13,500.", "$36,500.", "$40,000.", "$43,500."], ans: 1 },
    { q: "After all closing entries have been posted, the Income Summary account will have a Balance of ……………. .", opts: ["$0.", "$3,500 debit.", "$3,500 credit.", "$36,500 credit."], ans: 0 },
    { q: "After all closing entries have been posted, the revenue account will have a balance of ……………... .", opts: ["$0.", "$70,000 credit.", "$70,000 debit.", "$3,500 credit."], ans: 0 },
    { q: "A post-closing trial balance will show ………………. .", opts: ["only permanent account balances.", "only temporary account balances.", "zero balances for all accounts.", "the amount of net income (or loss) for the period"], ans: 0 },
    { q: "A post-closing trial balance will show …………. .", opts: ["zero balances for all accounts.", "zero balances for balance sheet accounts.", "only balance sheet accounts.", "only income statement accounts"], ans: 2 },
    { q: "The first required step in the accounting cycle is ………. .", opts: ["reversing entries.", "journalizing transactions in the book of original entry.", "analyzing transactions.", "posting transactions"], ans: 2 },
    { q: "All of the following are property, plant, and equipment except ………… .", opts: ["supplies.", "machinery.", "land.", "buildings."], ans: 0 },
    { q: "A current asset is ……………. .", opts: ["the last asset purchased by a business.", "an asset which is currently being used to produce a product or service.", "usually found as a separate classification in the income statement.", "an asset that a company expects to convert to cash or use up within one year"], ans: 3 },
    { q: "An intangible asset …………... .", opts: ["does not have physical substance, yet often are very valuable.", "is worthless because it has no physical substance.", "is converted into a tangible asset during the operating cycle.", "cannot be classified on the balance sheet because it lacks physical substance."], ans: 0 },
    { q: "Liabilities are generally classified on a balance sheet as ……………… .", opts: ["small liabilities and large liabilities.", "present liabilities and future liabilities.", "tangible liabilities and intangible liabilities.", "current liabilities and long-term liabilities."], ans: 3 },
    { q: "On May 14, Arizona Company purchased supplies of $2,000 on account. The entry to record the purchases will include ……………", opts: ["A debit to Supplies and a credit to Accounts Payable.", "A debit to Supplies Expense and a credit to Accounts Receivable.", "A debit to Supplies and a credit to Cash.", "A debit to Accounts Receivable and a credit to Supplies."], ans: 0 },
    { q: "On June 1, 2021, Donna Company reported a cash balance of $12,000. During June, Donna made deposits of $5,000 and made disbursements totaling $16,000. What is the cash balance at the end of June?", opts: ["$1,000 debit balance", "$15,000 debit balance", "$1,000 credit balance", "$4,000 credit balance"], ans: 0 },
    { q: "The simple accounting cycle consists of ………. Steps.", opts: ["5", "7", "9", "None of these"], ans: 1 },
    { q: "The non-simple accounting cycle consists of ……… steps.", opts: ["9", "7", "8", "None of these"], ans: 0 },
    { q: "The ………. is what makes the accounting cycle in a non-simple form.", opts: ["The journal entries", "Capitalization process", "posting process", "adjusting process"], ans: 3 },
    { q: "A temporary account that is opened and closed only at the end of every year.", opts: ["Revenues", "expenses", "income summary", "all of these", "none of these"], ans: 2 },
    { q: "The temporary account that does not have a normal balance.", opts: ["Drawings", "revenue", "expenses", "income summary", "there is no such account"], ans: 3 },
    { q: "…………… Accounts generally consists of all balance sheet accounts and these accounts are not closed.", opts: ["Temporary", "permanent", "nominal", "Additional", "fake"], ans: 1 },
    { q: "Permanent accounts reports on activities related to …………… future accounting periods and they carry their ending balances into the next period.", opts: ["Only one", "just five", "one or more", "another answer."], ans: 2 },
    { q: "Temporary accounts accumulate data related to …………. accounting period.", opts: ["More than one", "one", "zero", "none of these."], ans: 1 },
    { q: "Closing is the process of resetting the accounts of revenue, expenses, drawings and net income to ………… at the end of every accounting period.", opts: ["Be permanent", "credited", "debited", "zero"], ans: 3 },
    { q: "……........... Accounts include all income statement accounts, the drawings account and the income summary account.", opts: ["Permanent", "personnel", "temporary", "none of these"], ans: 2 },
    { q: "……........... are known as the productive facilities of any firm.", opts: ["the current assets", "long-term liabilities", "property, plant and equipment", "none of these"], ans: 2 },
    { q: "The special account used only in the closing process to temporarily hold the amounts of revenues and expenses is the:", opts: ["Nominal account", "closing account", "income summary account", "None of these"], ans: 2 },
    { q: "The accountant made an error by recording the same transaction twice. To correct that error, the accountant have to …………….", opts: ["reverse the transaction entry twice.", "do nothing.", "reverse the transaction entry only once.", "cancel the transaction posting."], ans: 2 },
    { q: "Any error occurs in journalizing and the posting process ………………. the trial balance.", opts: ["will not reflect on.", "May or may not reflect on.", "should be deducted from the debit side of.", "will reflect on."], ans: 1 },
    { q: "Mona began her business by $100,000 as capital. The net result was a net loss of $20,000. The capital account will be ………………. in the closing entry of the net result.", opts: ["Credited by $20,000.", "debited by $80,000", "debited by $20,000.", "another answer."], ans: 2 },
    { q: "Using the previous question, what would be the balance of the capital account appearing on the trial balance before and after the closing?", opts: ["$20,000, $100,000", "$80,000, $20,000", "$100,000, $80,000", "$80,000, $100,000"], ans: 2 },
    { q: "After the closing entries are made, …………. accounts going to appear on the trial balance.", opts: ["Temporary", "Adjusted", "Permanent", "Nominal", "another answer"], ans: 2 },
    { q: "Accounts with balances that are carried over to future years.", opts: ["Temporary.", "Permanent.", "Drawings.", "Expenses."], ans: 1 },
    { q: "Which is not a source document?", opts: ["Invoice.", "Check.", "Memorandum.", "none of these."], ans: 3 },
    { q: "What account balance is not affected by the closing entries?", opts: ["drawings.", "Capital.", "cash in bank.", "Expenses."], ans: 2 },
    { q: "A balance of an asset …………... .", opts: ["May be debit.", "May be credit.", "Always credit.", "Always debit.", "Another answer."], ans: 3 },
    { q: "A Company's operating cycle ……………. 12 months in length.", opts: ["is always.", "May be.", "have to be.", "can't be."], ans: 1 },
    { q: "Which of the following statements is false?", opts: ["Revenues increase owner's equity.", "Revenues have normal credit balances.", "Revenues are a positive factor in the computation of net income.", "Revenues are increased by debits"], ans: 3 },
    { q: "Which of the following rules is incorrect?", opts: ["Credits decrease the drawing account.", "Debits increase the capital account.", "Credits increase revenue accounts.", "Debits decrease liability accounts"], ans: 1 },
    { q: "The standard form of a journal entry has the …………. .", opts: ["debit account entered first and indented.", "credit account entered first and indented.", "debit account entered first at the extreme left margin.", "credit account entered first at the extreme left margin."], ans: 2 },
    { q: "DINA's company purchases equipment for $1500 and furniture for $1200 from Alex's company for $2700 cash, the entry for this transaction will include ……… .", opts: ["Credit to cash for Alex.", "Credit to accounts payable for donia.", "debit to equipment $1500 and debit to furniture $1200 for Alex.", "debit to equipment $1500 and furniture $1200 for dina's company."], ans: 3 },
    { q: "In order to convert the complete accounting cycle to a simple one, how many steps do you have to cancel?", opts: ["3", "4", "2", "1"], ans: 2 },
    { q: "The capital at the end of the year should appear on ……………... .", opts: ["owners' equity statement.", "cash flow statement.", "balance sheet.", "A & C.", "All of these."], ans: 3 },
    { q: "DINA purchased Supplies from Maher's library to be used by her sons and paid the entire amount by her visa card. The journal entry to record this transaction will include.", opts: ["There is no entry required.", "Credit to supplies by $2000 for Maher.", "Debit to supplies by $2000 for Donia's company.", "Credit to supplies by $2000 for Donia's company."], ans: 0 },
    { q: "The drawings account can be considered as …………… .", opts: ["liability account.", "expense account.", "Obligations from the owner's perspective.", "None of these."], ans: 3 },
    { q: "A capital account balance ……………. .", opts: ["May be debit.", "May be credit.", "Always credit.", "Always debit."], ans: 2 },
    { q: "A liability account …………… .", opts: ["May be debit.", "May be credit.", "May be debit or credit.", "Always credit."], ans: 3 },
    { q: "The balance of a liability account …………… .", opts: ["May be debit.", "May be credit.", "May be debit or credit.", "Always credit."], ans: 3 },
    { q: "The steps in preparing a trial balance include all of the following except:", opts: ["listing the account titles and their balances.", "totalling the debit and credit columns.", "proving the equality of the two columns.", "transferring journal amounts to ledger accounts."], ans: 3 },
    { q: "Ahmed Company received a cash advance of $500 from a customer. As a result of this event,", opts: ["assets increased by $500.", "owner's equity increased by $500.", "liabilities decreased by $500.", "both a and b"], ans: 0 },
    { q: "On April 1, 2020 Leno buys a machine for his business and finances this purchase with cash and a note. When journalizing this transaction, he will:", opts: ["use two journal entries.", "make a compound entry.", "make a simple entry.", "list the credit entries first"], ans: 1 },
    { q: "Another name for journal is:", opts: ["listing.", "book of original entry.", "book of summarizing.", "book of posting."], ans: 1 },
    { q: "At September 1, 2020, Foil Co. reported owner's equity of $136,000. During the month, Foil generated revenues of $20,000, incurred expenses of $12,000, purchased equipment for $5,000 and withdrew cash of $2,000. What is the amount of owner's equity at September 30, 2020?", opts: ["$136,000", "$8,000", "$137,000", "$142,000"], ans: 3 },
    { q: "After transaction information have been recorded in the journal, it is transferred to the:", opts: ["trial balance.", "income statement.", "book of original entry.", "Ledger"], ans: 3 },
    { q: "On July 7, 2022, Rethink Company performed cash services of $1,400. The entry to record this transaction would include:", opts: ["a debit to Service Revenue of $1,400.", "a credit to Accounts Receivable of $1,400.", "a debit to Cash of $1,400.", "a credit to Accounts Payable of $1,400."], ans: 2 },
    { q: "On December 1, 2020, Marco Company's accounts receivable balance was $1,200. During December, Marco had credit revenues of $5,000 and collected accounts receivable of $4,000. On December 31, 2020, the accounts receivable balance is:", opts: ["$1,200 debit.", "$2,200 debit.", "$6,200 debit.", "$2,200 credit."], ans: 1 },
    { q: "During February 2021, the owner invested cash of $25,000. The company had cash revenues of $4,000 and paid expenses of $7,000. What is the balance in Cash at February 28?", opts: ["$3,000 credit", "$22,000 debit", "$29,000 debit", "$18,000 credit"], ans: 1 },
    { q: "The final closing entry to be journalized typically closes the:", opts: ["revenue accounts.", "owner's drawings account.", "owner's capital account.", "expense accounts."], ans: 1 },
    { q: "Jack withdraws $500 cash from his business for personal use. The entry for this transaction will include a debit of $500 to:", opts: ["Jack, Drawing.", "Jack, Capital.", "Owner's Salary Expense.", "Salaries Expense."], ans: 0 },
    { q: "On May 4, Carter received a cash payment for services previously billed. He paid his telephone bill, and bought equipment on credit. For the three transactions, at least one of the entries will include a:", opts: ["credit to Nick Carter, Capital.", "credit to Notes Payable.", "debit to Accounts Receivable.", "credit to Accounts Payable"], ans: 3 },
    { q: "Cerner Company — total credits on its trial balance? (Cash $5,000; Prepaid insurance $500; AR $2,500; AP $2,000; NP $3,000; Capital $1,000; Drawing $500; Revenues $15,000; Expenses $12,500)", opts: ["$21,500", "$21,000", "$20,500", "$22,000"], ans: 0 },
    { q: "Equipment is classified in the balance sheet as:", opts: ["a current asset.", "property, plant, and equipment.", "an intangible asset.", "a long-term investment."], ans: 1 },
    { q: "Intangible assets include each of the following except:", opts: ["copyrights.", "goodwill.", "land", "Patent"], ans: 2 },
    { q: "Balance sheet accounts are considered to be:", opts: ["temporary owner's equity accounts.", "permanent accounts.", "capital accounts.", "nominal accounts."], ans: 1 },
    { q: "Dawson's Delivery Service purchased equipment for $2,500. Dawson paid $500 in cash and signed a note for the balance. Dawson debited Equipment and credited Cash and:", opts: ["nothing further must be done.", "debited the Dawson, Capital account for $2,000.", "credited another asset account for $500.", "credited a liability account for $2,000"], ans: 3 },
    { q: "The income summary account:", opts: ["is a permanent account.", "appears on the balance sheet.", "appears on the income statement.", "is a temporary account."], ans: 3 },
    { q: "If Income Summary has a credit balance after revenues and expenses have been closed into it, the closing entry for Income Summary will include a …...", opts: ["debit to the owner's capital account.", "debit to the owner's drawings account.", "credit to the owner's capital account.", "Credit to the owner's drawings account"], ans: 2 },
    { q: "The balance in the income summary account before it is closed will be equal to:", opts: ["the net income or loss on the income statement.", "the beginning balance in the owner's capital account.", "the ending balance in the owner's capital account.", "zero."], ans: 0 },
    { q: "The entry to close the expense accounts (Revenues $7,300, Total expenses $5,300, Net income $2,000) includes a:", opts: ["debit to Income Summary for $2,000.", "credit to Rent Expense for $1,300.", "credit to Income Summary for $5,300.", "debit to Salaries and Wages Expense for $3,000."], ans: 1 },
    { q: "What are total current assets? (Cash $15,000; AR $13,000; Prepaid insurance $7,200; Supplies $5,000)", opts: ["$28,000", "$35,200", "$40,200", "$46,200"], ans: 2 },
    { q: "Income Summary has a credit balance of $19,000. The entry to close Income Summary is:", opts: ["credit Income Summary $19,000, debit Owner's Capital $19,000.", "credit Income Summary $19,000, debit Owner's Drawings $19,000.", "debit Income Summary $19,000, credit Owner's Drawings $19,000.", "debit Income Summary $19,000, credit Owner's Capital $19,000."], ans: 3 },
    { q: "When an owner makes a withdrawal:", opts: ["it doesn't have to be cash, it could be another asset.", "the drawing account will be increased with a credit.", "the capital account will be directly increased with a debit.", "the drawing account will be decreased with a debit."], ans: 0 },
    { q: "On June 1, 2020, Delbert Inc. reported a cash balance of $12,000. During June, Delbert made deposits of $3,000 and made disbursements totalling $16,000. What is the cash balance at the end of June?", opts: ["$1,000 debit balance", "$15,000 debit balance", "$1,000 credit balance", "$4,000 credit balance"], ans: 2 },
    { q: "If the total of the debit entries to the equipment account amounted to $10,000 and the total of the credit entries amounted to $8,000. The equipment account has a (n):", opts: ["$8000 credit balance.", "$2,000 debit balance.", "$6000 debit balance.", "$2000 credit balance."], ans: 1 },
    { q: "A future economic sacrifice resulting from current obligations to transfer or render services in the future is a (n):", opts: ["Assets", "Liabilities", "Expenses", "Revenues"], ans: 1 },
    { q: "The policy of recording revenues when realized or expenses in the same period regardless of collection or payment is called the:", opts: ["Accrual Basis of Accounting", "Cash Basis of Accounting", "US-GAAP", "Periodicity Assumption"], ans: 0 },
    { q: "What did Waleed's shop show as total credits on its trial balance? (AP $90,000; NP $470,000; LT loans $400,000; Capital $600,000; Sales Rev $200,000; Service Rev $100,000)", opts: ["$1,000,000", "$1,680,000", "$1,860,000", "$1,580,000"], ans: 2 },
    { q: "The total revenues of Waleed's shop are:", opts: ["$300,000", "$200,000", "$100,000", "$400,000"], ans: 0 },
    { q: "The total expenses of Waleed's shop are: (Salaries $60,000; Rent $30,000; Advertising $20,000; Utilities $30,000)", opts: ["$90,000", "$120,000", "$140,000", "$60,000"], ans: 2 },
    { q: "The net income of Waleed's shop is: (Revenues $300,000; Expenses $140,000)", opts: ["$435,000", "$160,000", "$135,000", "$300,000"], ans: 1 },
    { q: "The ending capital of Waleed's shop is: (Beginning capital $600,000; Net income $160,000; Drawings $100,000)", opts: ["$600,000", "$500,000", "$660,000", "$760,000"], ans: 2 },
    { q: "The total current Assets of Waleed's shop are: (Cash $40,000; AR $100,000; Inventory $100,000)", opts: ["$580,000", "$240,000", "$1,380,000", "$1,620,000"], ans: 1 },
    { q: "The total fixed Assets of Waleed's shop are: (Land $340,000; Equipment $300,000; Buildings $500,000; Computers $240,000)", opts: ["$580,000", "$240,000", "$1,380,000", "$1,620,000"], ans: 2 },
    { q: "The total Assets of Waleed's shop are: (Current $240,000 + Fixed $1,380,000)", opts: ["$580,000", "$240,000", "$1,380,000", "$1,620,000"], ans: 3 },
    { q: "The total Liabilities of Waleed's shop are: (AP $90,000; NP $470,000; LT loans $400,000)", opts: ["$400,000", "$470,000", "$1,380,000", "$960,000"], ans: 3 },
    { q: "The total Liabilities & Equity of Waleed's shop are:", opts: ["$580,000", "$240,000", "$1,380,000", "$1,620,000"], ans: 3 },
    { q: "If salaries expenses are paid for $8,000 in cash. The effect of this transaction on the equation is:", opts: ["A Decrease in Assets & a decrease in owner's equity.", "An increase in Assets & an increase in owner's equity", "A Decrease in Assets & an increase in owner's equity.", "An increase in Assets & a decrease in owner's equity"], ans: 0 },
    { q: "………… states that 'Each transaction has two sides. One debit and one credit. The debit should be equal to the credit'.", opts: ["The double entry system", "The Debit and Credit Rule", "The cost principle", "The matching principle"], ans: 0 },
    { q: "Owner's equity is increased by:", opts: ["Assets", "Liabilities", "owner's equity", "Expenses", "Revenues"], ans: 4 },
    { q: "The net income amount is shown on ……… .", opts: ["income statement only", "the owner's equity statement only.", "both the income statement and the owner's equity statement.", "both the balance sheet and the owner's equity statement."], ans: 2 },
    { q: "Assets of Ahmed Company increased by $312,000, also its liabilities increased by $270,000. Owner's equity:", opts: ["Decreased by $42,000", "Decreased by $582,000", "Increased by $42,000", "Increased by $582,000"], ans: 2 },
];

const tfData = [
    { q: "The owner's drawings account is closed to the Income Summary account in order to properly determine net income (or loss) for the period.", ans: false },
    { q: "After closing entries have been journalized and posted, all temporary accounts in the ledger should have zero balances.", ans: true },
    { q: "Closing revenue and expense accounts to the Income Summary account is an optional bookkeeping procedure.", ans: false },
    { q: "Closing the drawings account to Owner's Capital is not necessary if net income is greater than owner's drawings during the period.", ans: false },
    { q: "Cash and supplies are both classified as current assets.", ans: true },
    { q: "The post-closing trial balance will contain only owner's equity statement accounts and balance sheet accounts.", ans: false },
    { q: "Each transaction must be analyzed in terms of its effect on the accounts before it can be recorded in a journal.", ans: true },
    { q: "Transactions are entered in the ledger accounts and then transferred to journals.", ans: false },
    { q: "Debit and credit can be interpreted to mean increase and decrease, respectively.", ans: false },
    { q: "Current assets are listed in the order of liquidity.", ans: true },
    { q: "Under the double-entry system, revenues must always equal expenses.", ans: false },
    { q: "The primary goal of a trial balance is to prove the mathematical equality of the debits and credits after posting.", ans: true },
    { q: "The trial balance will not balance when incorrect account titles are used in journalizing or posting.", ans: false },
    { q: "A trial balance does not prove that all transactions have been recorded or that the ledger is correct.", ans: true },
    { q: "The owner's drawing account is a permanent account whose balance is carried forward to the next accounting period.", ans: false },
    { q: "The Proprietorship is a business organized as a separate legal entity under state law having ownership divided into shares of stock.", ans: false },
    { q: "The normal balance of the liabilities and owner's equity accounts is the debit balance.", ans: false },
    { q: "All Expenses are credit accounts.", ans: false },
    { q: "The Changes in owner's equity during the period can be shown by the statement of cash flows.", ans: false },
    { q: "The Statement of financial position shows the entity's revenues and expenses, and net result of the activities.", ans: false },
    { q: "Revenues are the Cash collected from the sale of goods during a period. (A credit is a decrease in an account.)", ans: false },
    { q: "The normal balance of the assets accounts is the credit balance.", ans: false },
    { q: "The normal balance of the liabilities and owner's equity accounts is the debit balance. (Q23)", ans: false },
    { q: "All revenues are debit accounts.", ans: false },
    { q: "The profit or loss of the enterprise is determined by the statement of cash flows.", ans: false },
    { q: "The statement of owner's equity shows the Changes in owner's equity during the period.", ans: true },
    { q: "Preparation of the general-purpose financial statements called Summarizing.", ans: false },
    { q: "The sole purpose of accounting is to determine the profit or loss of the project.", ans: false },
    { q: "An account will have a credit balance if the credits exceed the debits.", ans: true },
    { q: "If expenses are paid in cash, then assets will increase.", ans: false },
];

let answered = 0;
let score = 0;
const total = mcqData.length + tfData.length;

function updateProgress() {
    const pct = (answered / total) * 100;
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressLabel').textContent = `${answered} / ${total} answered`;
    document.getElementById('scoreLabel').textContent = `Score: ${score}`;
    if (answered === total) {
        const box = document.getElementById('summaryBox');
        box.classList.add('show');
        const pctScore = Math.round((score / total) * 100);
        document.getElementById('summaryGrade').textContent = pctScore + '%';
        let grade = pctScore >= 90 ? 'Excellent!' : pctScore >= 75 ? 'Very Good' : pctScore >= 60 ? 'Good' : pctScore >= 50 ? 'Pass' : 'Keep Studying';
        document.getElementById('summarySub').textContent = `${score} correct out of ${total} — ${grade}`;
    }
}

function buildMCQ() {
    const container = document.getElementById('mcqSection');
    container.innerHTML = '<div class="section-heading">Multiple Choice Questions</div>';
    const labels = ['A', 'B', 'C', 'D', 'E'];
    mcqData.forEach((item, qi) => {
        const card = document.createElement('div');
        card.className = 'q-card';
        card.style.animationDelay = (qi * 0.015) + 's';
        card.innerHTML = `<div class="q-num">Q${qi + 1}</div><div class="q-text">${item.q}</div><div class="options" id="mc-opts-${qi}"></div><div class="feedback" id="mc-fb-${qi}"></div>`;
        container.appendChild(card);
        const opts = card.querySelector(`#mc-opts-${qi}`);
        item.opts.forEach((opt, oi) => {
            const btn = document.createElement('button');
            btn.className = 'opt-btn';
            btn.innerHTML = `<span class="opt-label">${labels[oi]}</span>${opt}`;
            btn.onclick = () => handleMCQ(qi, oi, btn, opts);
            opts.appendChild(btn);
        });
    });
}

function handleMCQ(qi, chosen, btn, optsEl) {
    const item = mcqData[qi];
    const btns = optsEl.querySelectorAll('.opt-btn');
    btns.forEach(b => b.disabled = true);
    const fb = document.getElementById(`mc-fb-${qi}`);
    if (chosen === item.ans) {
        btn.classList.add('correct');
        fb.className = 'feedback correct-fb';
        fb.textContent = '✓ Correct!';
        score++;
    } else {
        btn.classList.add('wrong');
        btns[item.ans].classList.add('reveal-correct');
        fb.className = 'feedback wrong-fb';
        fb.textContent = `✗ Incorrect. Correct answer: ${['A','B','C','D','E'][item.ans]}`;
    }
    answered++;
    updateProgress();
}

function buildTF() {
    const container = document.getElementById('tfSection');
    container.innerHTML = '<div class="section-heading">True / False</div>';
    tfData.forEach((item, qi) => {
        const card = document.createElement('div');
        card.className = 'q-card';
        card.style.animationDelay = (qi * 0.015) + 's';
        card.innerHTML = `
      <div class="q-num">T/F ${qi + 1}</div>
      <div class="q-text">${item.q}</div>
      <div class="tf-row">
        <button class="tf-btn" id="tf-t-${qi}" onclick="handleTF(${qi}, true)">TRUE</button>
        <button class="tf-btn" id="tf-f-${qi}" onclick="handleTF(${qi}, false)">FALSE</button>
      </div>
      <div class="feedback" id="tf-fb-${qi}"></div>`;
        container.appendChild(card);
    });
}

function handleTF(qi, chosen) {
    const item = tfData[qi];
    const tBtn = document.getElementById(`tf-t-${qi}`);
    const fBtn = document.getElementById(`tf-f-${qi}`);
    tBtn.disabled = true; fBtn.disabled = true;
    const fb = document.getElementById(`tf-fb-${qi}`);
    const chosenBtn = chosen ? tBtn : fBtn;
    const correctBtn = item.ans ? tBtn : fBtn;
    if (chosen === item.ans) {
        chosenBtn.classList.add('correct');
        fb.className = 'feedback correct-fb';
        fb.textContent = '✓ Correct!';
        score++;
    } else {
        chosenBtn.classList.add('wrong');
        correctBtn.classList.add('reveal-correct');
        fb.className = 'feedback wrong-fb';
        fb.textContent = `✗ Incorrect. Answer is ${item.ans ? 'TRUE' : 'FALSE'}.`;
    }
    answered++;
    updateProgress();
}

function resetQuiz() {
    answered = 0; score = 0;
    document.getElementById('summaryBox').classList.remove('show');
    document.getElementById('progressFill').style.width = '0%';
    document.getElementById('progressLabel').textContent = `0 / ${total} answered`;
    document.getElementById('scoreLabel').textContent = 'Score: 0';
    buildMCQ();
    buildTF();
}

buildMCQ();
buildTF();