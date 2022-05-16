import "./App.css";
import ButtonText from "./components/button/ButtonText";
import Button from "./components/button/Button";

function App() {
  return (
    <div className="Buttons">
      <h1>Buttons</h1>
      <div className="row">
        <div className="btn-container">
          <ButtonText text="&lt;Button /&gt;" />
          <Button />
        </div>
      </div>
      <div className="row">
        <div className="btn-container">
          <ButtonText text="&lt;Button variant=”outline” /&gt;" />
          <Button varient="outline" />
        </div>
      </div>
      <div className="row">
        <div className="btn-container">
          <ButtonText text="&lt;Button variant=”text” /&gt;" />
          <Button varient="text" />
        </div>
      </div>
      <div className="row">
        <div className="btn-container">
          <ButtonText text="&lt;Button disableShadow /&gt;" />
          <Button disableShadow />
        </div>
      </div>
      <div className="row">
        <div className="btn-container">
          <ButtonText text="&lt;Button disabled /&gt;" />
          <Button disabled />
        </div>
        <div className="btn-container">
          <ButtonText text="&lt;Button variant=”text” disabled /&gt;" />
          <Button varient="text" disabled />
        </div>
      </div>
      <div className="row">
        <div className="btn-container">
          <ButtonText text="&lt;Button startIcon=”local_grocery_store” /&gt;" />
          <Button startIcon="local_grocery_store" />
        </div>
        <div className="btn-container">
          <ButtonText text="&lt;Button endIcon=”local_grocery_store” /&gt;" />
          <Button endIcon="local_grocery_store" />
        </div>
      </div>
      <div className="row">
        <div className="btn-container">
          <ButtonText text="&lt;Button size=”sm” /&gt;" />
          <Button size="sm" />
        </div>
        <div className="btn-container">
          <ButtonText text="&lt;Button size=”md” /&gt;" />
          <Button size="md" />
        </div>
        <div className="btn-container">
          <ButtonText text="&lt;Button size=”lg” /&gt;" />
          <Button size="lg" />
        </div>
      </div>
      <div className="row">
        <div className="btn-container">
          <ButtonText text="&lt;Button color=”default” /&gt;" />
          <Button color="default" />
        </div>
        <div className="btn-container">
          <ButtonText text="&lt;Button color=”primary” &gt;" />
          <Button color="primary" />
        </div>
        <div className="btn-container">
          <ButtonText text="&lt;Button color=”secondary” /> &gt;" />
          <Button color="secondary" />
        </div>
      </div>
    </div>
  );
}

export default App;
