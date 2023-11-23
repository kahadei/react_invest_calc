import { calculateInvestmentResults, formatter } from "../util/investment";


function Results({ input }) {
    let result = calculateInvestmentResults(input);
    const initialInvestment = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;

    console.log(result);
    return (<table id="result">
        <thead>
            <tr>
                <th>
                    Year
                </th>
                <th>
                    Investment Value
                </th>
                <th>
                    Interest (year)
                </th>
                <th>
                    Total Interest
                </th>
                <th>
                    Invested Capital
                </th>
            </tr>
        </thead>
        <tbody>
            {result.map(yearData => {
                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                const totalAmountIvested = yearData.valueEndOfYear - totalInterest;
                return <tr key={yearData.year}>
                    <td>
                        {yearData.year}
                    </td>
                    <td>
                        {formatter.format(yearData.valueEndOfYear)}
                    </td>
                    <td>
                        {formatter.format(yearData.interest)}
                    </td>
                    <td>
                        {formatter.format(totalInterest)}
                    </td>
                    <td>
                        {formatter.format(totalAmountIvested)}
                    </td>
                </tr>
            })}
        </tbody>
    </table>);
}

export default Results;