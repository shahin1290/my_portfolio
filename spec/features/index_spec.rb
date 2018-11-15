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

        expect(page).to have_css '.container'
        expect(page).to have_css 'img'

        within '.container' do
            expect(page).to have_content 'About Me'
        end
    end

    it 'displays project list' do
        visit '/'
    
        expect(page).to have_css '.projects'
    
        within '.projects' do
          expect(page).to have_content 'TODOS'
        end
    end    

    it 'displays menus of navigation links' do
        visit '/'
    
        expect(page).to have_css 'header .nav-bar'
    
        within 'header .nav-bar' do
          expect(page).to have_content 'About'
          expect(page).to have_css 'a[href*="#"]'
        end
      end

      it 'displays forms' do
        visit '/'

        expect(page).to have_css 'form[method*="POST"]'

        within 'form[method*="POST"]' do
            expect(page).to have_css 'button[type*="submit"]'
        end
    end
        
    

end