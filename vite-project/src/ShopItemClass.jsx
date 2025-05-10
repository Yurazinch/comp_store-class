// eslint-disable-next-line no-undef
export class ShopItemClass extends React.Component {
    render(){
        return (
            <div class="main-content">
                <h2>{this.brand}</h2>
                <h1>{this.title}</h1>
                <h3>{this.description}</h3>
                <div class="description">
                    {this.descriptionFull}
                </div>
                <div class="highlight-window mobile">
                    <div class="highlight-overlay"></div>
                </div>
                <div class="divider"></div>
                <div class="purchase-info">
                    <div class="price">{this.currency}{this.price}</div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        )
    }
}