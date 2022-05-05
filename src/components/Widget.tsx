import { ChatTeardropDots } from 'phosphor-react';
import { useState } from 'react';
import { Popover } from '@headlessui/react';
import { WidgetForm } from './WidgetForm/Index';

export function Widget() {

    return (

        // Cria o botao definindo a posição dele no final direito da pagina, com display flex e alinhando itens
        <Popover className='absolute bottom-4 right-4 md:bottom-8 right-8 flex flex-col items-end'>

            {/* Painel que sera aberto após clicar no botão */}
            <Popover.Panel>
                {/* Component do widget */}
                <WidgetForm />
            </Popover.Panel>

            {/* Define que o botão ira abrir o painel */}
            <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
                <ChatTeardropDots className='w-6 h-6' />

                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    <span className='pl-2'>Feedback</span>
                </span>
            </Popover.Button>
        </Popover>
    )

}