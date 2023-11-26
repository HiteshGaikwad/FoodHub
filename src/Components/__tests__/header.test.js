import { render } from "@testing-library/react"
import Header from "../Header";
import {Provider} from "react-redux";
import store from "../../../utils/store";
import {StaticRouter} from "react-router-dom/server";
import { IMG_LOGO_URL } from "../../../Config";

test("Logo should load on rendering header",()=>{
    const header= render(
    <StaticRouter>
    <Provider store={store}>
    <Header/>
    </Provider>
    </StaticRouter>) 


    // console.log(header);

    const logo= header.getByTestId("logo");

    expect(logo.src).toBe(IMG_LOGO_URL);
})

test("check online status in header",()=>{
    const header= render(
    <StaticRouter>
    <Provider store={store}>
    <Header/>
    </Provider>
    </StaticRouter>) 


    // console.log(header);

    const online= header.getByTestId("online");

    expect(online.innerHTML).toBe("");
})

test("cart value should be 0 on rendering header",()=>{
    const header= render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    )

    const cart= header.getByTestId("cart");

    expect(cart.innerHTML).toBe("0");
})