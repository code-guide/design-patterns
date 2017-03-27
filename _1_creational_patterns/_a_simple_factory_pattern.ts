/**
 * 简单工厂方法
 * 
 * 根据参数的不同返回不同的对象实例。被创建的实例通常都具有共同的父类。
 * 
 */
namespace simple_factory_pattern {

    abstract class Button {                           // => ababstract_product 抽象产品角色
        color: string;
    }

    class RedButton extends Button {                  // => concrete_product 具体产品角色
        color = 'red';
    }

    class YellowButton extends Button {
        color = 'yellow';
    }

    class WhiteButton extends Button {
        color = 'white';
    }

    class ButtonFactory {                            // => factory 工厂角色
        static getButton(color: string) {
            if (color === 'red') return new RedButton();
            if (color === 'yellow') return new YellowButton();
            if (color === 'WhiteButton') return new WhiteButton();
        }
    }

    // test
    let button = ButtonFactory.getButton('red');
    console.log(button);

}

/**
 * 问题
 * 
 * 工厂类职责过重，每次添加新的具体产品需要修改工厂类，不符合开闭原则。
 * 
 */

/**
 * 适用场景
 * 
 * 简单工厂模式适用情况包括：工厂类负责创建的对象比较少；客户端只知道传入工厂类的参数，对于如何创建对象不关心。
 * 
 */