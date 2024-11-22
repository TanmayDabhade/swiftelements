export const componentDataExternal = [
    // Category: Buttons
    {
        name: 'Directions',
        category: 'Documentation',
        description: 'Documentation of the selected component will be displayed here for users to refer. It is highly recommended to read the description thoroughly to understand the code and avoid any errors that might occur.',
        usage: ``,
        code: ``,
      },
    {
      name: 'PrimaryButton',
      category: 'Buttons',
      description: 'The PrimaryButton is used for the main call-to-action in your app. It features bold styling to attract user attention and utilizes the app\'s accent color. The button text and action are customizable, and it adapts to light and dark modes using environment variables.',
      usage: ``,
      code: `
      // PrimaryButton.swift
      // YourApp
  
      import SwiftUI
  
      struct PrimaryButton: View {
          var title: String
          var action: () -> Void
  
          var body: some View {
              Button(action: action) {
                  Text(title)
                      .fontWeight(.bold)
                      .frame(maxWidth: .infinity)
                      .padding()
                      .foregroundColor(.white)
                      .background(Color.accentColor)
                      .cornerRadius(10)
              }
          }
      }
  
      struct PrimaryButton_Previews: PreviewProvider {
          static var previews: some View {
              PrimaryButton(title: "Get Started", action: {})
                  .padding()
                  .previewLayout(.sizeThatFits)
          }
      }
      `,
    },
    {
      name: 'SecondaryButton',
      category: 'Buttons',
      description: 'The SecondaryButton is designed for secondary actions in your app. It has a less prominent style compared to the PrimaryButton, often featuring an outline or lighter color. The button supports custom text and actions and adapts to the environment\'s color scheme.',
      usage: ``,
      code: `
      // SecondaryButton.swift
      // YourApp
  
      import SwiftUI
  
      struct SecondaryButton: View {
          var title: String
          var action: () -> Void
  
          var body: some View {
              Button(action: action) {
                  Text(title)
                      .fontWeight(.medium)
                      .frame(maxWidth: .infinity)
                      .padding()
                      .foregroundColor(Color.accentColor)
                      .background(
                          RoundedRectangle(cornerRadius: 10)
                              .stroke(Color.accentColor, lineWidth: 2)
                      )
              }
          }
      }
  
      struct SecondaryButton_Previews: PreviewProvider {
          static var previews: some View {
              SecondaryButton(title: "Learn More", action: {})
                  .padding()
                  .previewLayout(.sizeThatFits)
          }
      }
      `,
    },
    {
      name: 'IconButton',
      category: 'Buttons',
      description: 'The IconButton displays an icon representing an action. It\'s useful for toolbar buttons or common actions like search, settings, or favorites. The component supports custom icons and actions, adjusting its appearance based on the environment\'s color scheme.',
      usage: ``,
      code: `
      // IconButton.swift
      // YourApp
  
      import SwiftUI
  
      struct IconButton: View {
          var systemName: String
          var action: () -> Void
  
          var body: some View {
              Button(action: action) {
                  Image(systemName: systemName)
                      .font(.title2)
                      .foregroundColor(Color.accentColor)
                      .padding()
                      .background(
                          Circle()
                              .stroke(Color.accentColor, lineWidth: 2)
                      )
              }
          }
      }
  
      struct IconButton_Previews: PreviewProvider {
          static var previews: some View {
              IconButton(systemName: "heart.fill", action: {})
                  .padding()
                  .previewLayout(.sizeThatFits)
          }
      }
      `,
    },
    {
      name: 'RoundedButton',
      category: 'Buttons',
      description: 'The RoundedButton features fully rounded corners, giving it a pill-shaped appearance. It\'s ideal for actions requiring a softer look. The button supports custom text and actions and uses environment variables to adapt to different color schemes.',
      usage: ``,
      code: `
      // RoundedButton.swift
      // YourApp
  
      import SwiftUI
  
      struct RoundedButton: View {
          var title: String
          var action: () -> Void
  
          var body: some View {
              Button(action: action) {
                  Text(title)
                      .fontWeight(.semibold)
                      .padding()
                      .foregroundColor(.white)
                      .background(Color.accentColor)
                      .cornerRadius(25)
              }
              .frame(maxWidth: .infinity)
          }
      }
  
      struct RoundedButton_Previews: PreviewProvider {
          static var previews: some View {
              RoundedButton(title: "Subscribe", action: {})
                  .padding()
                  .previewLayout(.sizeThatFits)
          }
      }
      `,
    },
    {
      name: 'ToggleButton',
      category: 'Buttons',
      description: 'The ToggleButton represents a binary state (e.g., on/off). It changes appearance based on its state and uses environment variables to manage state and adapt to different color schemes.',
      usage: ``,
      code: `
      // ToggleButton.swift
      // YourApp
  
      import SwiftUI
  
      struct ToggleButton: View {
          @Binding var isOn: Bool
  
          var body: some View {
              Button(action: { isOn.toggle() }) {
                  Image(systemName: isOn ? "bell.fill" : "bell")
                      .font(.title)
                      .foregroundColor(isOn ? Color.accentColor : .gray)
                      .padding()
              }
          }
      }
  
      struct ToggleButton_Previews: PreviewProvider {
          @State static var isOn = true
  
          static var previews: some View {
              ToggleButton(isOn: $isOn)
                  .padding()
                  .previewLayout(.sizeThatFits)
          }
      }
      `,
    },
  
    // Category: Cards
    {
      name: 'ProductCard',
      category: 'Cards',
      description: 'The ProductCard displays product information, including an image, name, and price. It\'s commonly used in e-commerce apps. This component uses environment objects to manage cart state and environment variables to adapt to different color schemes.',
      usage: ``,
      code: `
      // ProductCard.swift
      // YourApp
  
      import SwiftUI
  
      struct ProductCard: View {
          @EnvironmentObject var cartManager: CartManager
          var product: Product
  
          var body: some View {
              ZStack(alignment: .topTrailing) {
                  VStack(alignment: .leading) {
                      Image(product.imageName)
                          .resizable()
                          .aspectRatio(contentMode: .fit)
                          .cornerRadius(10)
                      Text(product.name)
                          .font(.headline)
                          .lineLimit(2)
                      Text("$\\(product.price, specifier: "%.2f")")
                          .font(.subheadline)
                          .foregroundColor(.secondary)
                  }
                  .padding()
                  .background(Color(UIColor.systemBackground))
                  .cornerRadius(10)
                  .shadow(radius: 5)
  
                  Button(action: {
                      cartManager.add(product)
                  }) {
                      Image(systemName: "plus.circle.fill")
                          .font(.title)
                          .foregroundColor(Color.accentColor)
                  }
                  .padding([.top, .trailing], 10)
              }
          }
      }
  
      struct ProductCard_Previews: PreviewProvider {
          static var previews: some View {
              ProductCard(product: Product.example)
                  .environmentObject(CartManager())
                  .padding()
                  .previewLayout(.sizeThatFits)
          }
      }
  
      // Supporting Models
  
      struct Product: Identifiable {
          var id = UUID()
          var name: String
          var imageName: String
          var price: Double
  
          static let example = Product(name: "Example Product", imageName: "example_image", price: 19.99)
      }
  
      class CartManager: ObservableObject {
          @Published var products: [Product] = []
  
          func add(_ product: Product) {
              products.append(product)
          }
      }
      `,
    },
    {
      name: 'UserProfileCard',
      category: 'Cards',
      description: 'The UserProfileCard displays a user\'s profile information, including avatar, name, and a brief bio. It\'s commonly used in social media apps. The component utilizes environment variables to adapt to different color schemes.',
      usage: ``,
      code: `
      // UserProfileCard.swift
      // YourApp
  
      import SwiftUI
  
      struct UserProfileCard: View {
          var user: User
  
          var body: some View {
              VStack {
                  Image(user.avatarName)
                      .resizable()
                      .clipShape(Circle())
                      .frame(width: 80, height: 80)
                      .shadow(radius: 5)
                  Text(user.name)
                      .font(.headline)
                  Text(user.bio)
                      .font(.subheadline)
                      .foregroundColor(.secondary)
                      .multilineTextAlignment(.center)
                      .lineLimit(3)
              }
              .padding()
              .background(Color(UIColor.systemBackground))
              .cornerRadius(10)
              .shadow(radius: 5)
          }
      }
  
      struct UserProfileCard_Previews: PreviewProvider {
          static var previews: some View {
              UserProfileCard(user: User.example)
                  .padding()
                  .previewLayout(.sizeThatFits)
          }
      }
  
      // Supporting Models
  
      struct User {
          var name: String
          var avatarName: String
          var bio: String
  
          static let example = User(name: "Jane Doe", avatarName: "avatar_jane", bio: "iOS Developer, Coffee Lover, Traveler.")
      }
      `,
    },
    {
      name: 'ArticleCard',
      category: 'Cards',
      description: 'The ArticleCard displays a summary of an article, including a title, image, and brief excerpt. It\'s used in news or blogging apps to provide a preview of articles. The component adapts to the environment\'s color scheme.',
      usage: ``,
      code: `
      // ArticleCard.swift
      // YourApp
  
      import SwiftUI
  
      struct ArticleCard: View {
          var article: Article
  
          var body: some View {
              VStack(alignment: .leading) {
                  Image(article.imageName)
                      .resizable()
                      .aspectRatio(contentMode: .fill)
                      .frame(height: 150)
                      .clipped()
                  Text(article.title)
                      .font(.headline)
                      .padding([.top, .horizontal])
                  Text(article.excerpt)
                      .font(.subheadline)
                      .foregroundColor(.secondary)
                      .padding([.bottom, .horizontal])
              }
              .background(Color(UIColor.systemBackground))
              .cornerRadius(10)
              .shadow(radius: 5)
          }
      }
  
      struct ArticleCard_Previews: PreviewProvider {
          static var previews: some View {
              ArticleCard(article: Article.example)
                  .padding()
                  .previewLayout(.sizeThatFits)
          }
      }
  
      // Supporting Models
  
      struct Article: Identifiable {
          var id = UUID()
          var title: String
          var excerpt: String
          var imageName: String
  
          static let example = Article(title: "SwiftUI for Beginners", excerpt: "Learn how to build beautiful UIs with SwiftUI.", imageName: "swiftui_example")
      }
      `,
    },
    {
      name: 'WeatherCard',
      category: 'Cards',
      description: 'The WeatherCard displays weather information such as temperature, conditions, and an icon representing the current weather. It\'s useful in weather apps or any app displaying weather data. The component adapts to the user\'s color scheme.',
      usage: ``,
      code: `
      // WeatherCard.swift
      // YourApp
  
      import SwiftUI
  
      struct WeatherCard: View {
          var weather: Weather
  
          var body: some View {
              VStack {
                  Text(weather.city)
                      .font(.title)
                      .bold()
                  Image(systemName: weather.iconName)
                      .font(.system(size: 50))
                      .padding()
                  Text("\\(weather.temperature, specifier: "%.1f")°")
                      .font(.largeTitle)
                  Text(weather.condition)
                      .font(.headline)
                      .foregroundColor(.secondary)
              }
              .padding()
              .background(Color(UIColor.systemBackground))
              .cornerRadius(15)
              .shadow(radius: 5)
          }
      }
  
      struct WeatherCard_Previews: PreviewProvider {
          static var previews: some View {
              WeatherCard(weather: Weather.example)
                  .padding()
                  .previewLayout(.sizeThatFits)
          }
      }
  
      // Supporting Models
  
      struct Weather {
          var city: String
          var temperature: Double
          var condition: String
          var iconName: String
  
          static let example = Weather(city: "San Francisco", temperature: 68.5, condition: "Sunny", iconName: "sun.max.fill")
      }
      `,
    },
    {
      name: 'EventCard',
      category: 'Cards',
      description: 'The EventCard displays information about an event, including the title, date, location, and a brief description. It\'s useful in calendar or event management apps. The component adapts to the environment\'s color scheme.',
      usage: ``,
      code: `
      // EventCard.swift
      // YourApp
  
      import SwiftUI
  
      struct EventCard: View {
          var event: Event
  
          var body: some View {
              VStack(alignment: .leading) {
                  Text(event.title)
                      .font(.headline)
                      .padding([.top, .horizontal])
                  HStack {
                      Image(systemName: "calendar")
                      Text(event.date, style: .date)
                      Spacer()
                  }
                  .font(.subheadline)
                  .foregroundColor(.secondary)
                  .padding(.horizontal)
                  HStack {
                      Image(systemName: "location")
                      Text(event.location)
                      Spacer()
                  }
                  .font(.subheadline)
                  .foregroundColor(.secondary)
                  .padding([.horizontal, .bottom])
                  Text(event.description)
                      .font(.body)
                      .lineLimit(3)
                      .padding(.horizontal)
              }
              .background(Color(UIColor.systemBackground))
              .cornerRadius(10)
              .shadow(radius: 5)
          }
      }
  
      struct EventCard_Previews: PreviewProvider {
          static var previews: some View {
              EventCard(event: Event.example)
                  .padding()
                  .previewLayout(.sizeThatFits)
          }
      }
  
      // Supporting Models
  
      struct Event {
          var title: String
          var date: Date
          var location: String
          var description: String
  
          static let example = Event(title: "SwiftUI Workshop", date: Date(), location: "Online", description: "Join us for an in-depth SwiftUI workshop where we'll build amazing apps.")
      }
      `,
    },
  
    // Category: Lists
    {
      name: 'SimpleList',
      category: 'Lists',
      description: 'The SimpleList displays a list of items using SwiftUI\'s List view. It demonstrates how to create a basic list with custom data models. It uses environment variables for theming and supports dynamic data.',
      usage: ``,
      code: `
      // SimpleList.swift
      // YourApp
  
      import SwiftUI
  
      struct SimpleList: View {
          var items: [String]
  
          var body: some View {
              List(items, id: \\.self) { item in
                  Text(item)
              }
          }
      }
  
      struct SimpleList_Previews: PreviewProvider {
          static var previews: some View {
              SimpleList(items: ["Item 1", "Item 2", "Item 3"])
          }
      }
      `,
    },
    {
      name: 'SectionedList',
      category: 'Lists',
      description: 'The SectionedList displays a list of items grouped into sections. It demonstrates how to use List with sections and headers. The component adapts to the environment\'s color scheme and supports dynamic data.',
      usage: ``,
      code: `
      // SectionedList.swift
      // YourApp
  
      import SwiftUI
  
      struct SectionedList: View {
          var sections: [SectionData]
  
          var body: some View {
              List {
                  ForEach(sections) { section in
                      Section(header: Text(section.title)) {
                          ForEach(section.items, id: \\.self) { item in
                              Text(item)
                          }
                      }
                  }
              }
          }
      }
  
      struct SectionedList_Previews: PreviewProvider {
          static var previews: some View {
              SectionedList(sections: [
                  SectionData(title: "Fruits", items: ["Apple", "Banana", "Cherry"]),
                  SectionData(title: "Vegetables", items: ["Carrot", "Lettuce", "Tomato"])
              ])
          }
      }
  
      // Supporting Models
  
      struct SectionData: Identifiable {
          var id = UUID()
          var title: String
          var items: [String]
      }
      `,
    },
    {
      name: 'SwipeableList',
      category: 'Lists',
      description: 'The SwipeableList demonstrates how to add swipe actions to list items, such as delete or edit actions. It uses environment variables for theming and supports dynamic data with item removal.',
      usage: ``,
      code: `
      // SwipeableList.swift
      // YourApp
  
      import SwiftUI
  
      struct SwipeableList: View {
          @State private var items: [String] = ["Item A", "Item B", "Item C"]
  
          var body: some View {
              List {
                  ForEach(items, id: \\.self) { item in
                      Text(item)
                  }
                  .onDelete(perform: delete)
              }
          }
  
          func delete(at offsets: IndexSet) {
              items.remove(atOffsets: offsets)
          }
      }
  
      struct SwipeableList_Previews: PreviewProvider {
          static var previews: some View {
              SwipeableList()
          }
      }
      `,
    },
    {
      name: 'EditableList',
      category: 'Lists',
      description: 'The EditableList allows users to edit the list by adding or removing items. It demonstrates how to enable editing mode in a list. It uses environment variables for theming and supports dynamic data.',
      usage: ``,
      code: `
      // EditableList.swift
      // YourApp
  
      import SwiftUI
  
      struct EditableList: View {
          @State private var items: [String] = ["Task 1", "Task 2", "Task 3"]
          @State private var isEditing = false
  
          var body: some View {
              NavigationView {
                  List {
                      ForEach(items, id: \\.self) { item in
                          Text(item)
                      }
                      .onDelete(perform: delete)
                  }
                  .navigationBarTitle("Tasks")
                  .navigationBarItems(trailing: EditButton())
              }
          }
  
          func delete(at offsets: IndexSet) {
              items.remove(atOffsets: offsets)
          }
      }
  
      struct EditableList_Previews: PreviewProvider {
          static var previews: some View {
              EditableList()
          }
      }
      `,
    },
    {
      name: 'GridList',
      category: 'Lists',
      description: 'The GridList displays items in a grid format using SwiftUI\'s LazyVGrid. It demonstrates how to create grid layouts with dynamic data. It uses environment variables for theming and adapts to different screen sizes.',
      usage: ``,
      code: `
      // GridList.swift
      // YourApp
  
      import SwiftUI
  
      struct GridList: View {
          let items = (1...20).map { "Item \\($0)" }
          let columns = [
              GridItem(.flexible()),
              GridItem(.flexible())
          ]
  
          var body: some View {
              ScrollView {
                  LazyVGrid(columns: columns, spacing: 20) {
                      ForEach(items, id: \\.self) { item in
                          Text(item)
                              .frame(maxWidth: .infinity)
                              .padding()
                              .background(Color(UIColor.secondarySystemBackground))
                              .cornerRadius(8)
                      }
                  }
                  .padding()
              }
          }
      }
  
      struct GridList_Previews: PreviewProvider {
          static var previews: some View {
              GridList()
          }
      }
      `,
    },
  
    // Additional categories would follow the same structure...
  ];