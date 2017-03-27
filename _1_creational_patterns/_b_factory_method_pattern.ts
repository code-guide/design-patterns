/**
 * 工厂方法模式
 * 
 * 
 */
namespace factory_method_pattern {

    abstract class Button {
        color: string;
    }

    class RedButton extends Button {
        color = 'yellow';
    }

    class YellowButton extends Button {
        color = 'yellow';
    }

    class WhiteButton extends Button {
        color = 'white';
    }

    abstract class ButtonFactory {
        getButton: () => {};
    }

    class RedButtonFactory extends ButtonFactory {
        getButton() { }
    }

}