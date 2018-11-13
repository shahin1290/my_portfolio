describe 'Index Page', type: :feature do
    it 'displays homepage information' do
        visit '/'

        expect(page).to have_css '#info'
        within '#info' do
            expect(page).to have_content 'MD SHAHIN PATOWARY'
            expect(page).to have_content 'Junior Full Stack Web Developer'
        end
    end

    it 'displays more informations about me and my image' do
        visit '/'

        expect(page).to have_css '#about-me'
        expect(page).to have_css '#my-image'
        within '#about-me' do
            expect(page).to have_content 'About Me'
        end
    end

    it 'displays project list' do
        visit '/'
    
        expect(page).to have_css '.projects'
    
        within '.projects' do
          expect(page).to have_content 'My First Website'
          expect(page).to have_content 'FizzBuzz'
        end
    end    

    it 'displays menus of navigation links' do
        visit '/'
    
        expect(page).to have_css '.navbar'
    
        within '.navbar' do
          expect(page).to have_content 'About'
          expect(page).to have_css 'a[href*="#"]'
        end
      end
        
    

end